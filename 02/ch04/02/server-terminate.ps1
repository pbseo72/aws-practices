$PUBLICNAME=""

while($PUBLICNAME -eq ""){
   Write-Host -n "public name of server: "
   $PUBLICNAME = Read-Host
}


# Get Instance ID & Security Group ID
$ARR=((aws ec2 describe-instances --query "Reservations[*].Instances[?PublicDnsName=='$PUBLICNAME'].[InstanceId, SecurityGroups[0].GroupId]" --output text) -split '\s+')

$INSTANCEID=$ARR[0]
$SGID=$ARR[1]

Write-Host $INSTANCEID
Write-Host $SGID

if($INSTANCEID -ne ""){ 
    # Terminate the server(silently)
    aws ec2 terminate-instances --instance-ids $INSTANCEID
    Write-Host "terminating '$INSTANCEID' ..."
    aws ec2 wait instance-terminated --instance-ids $INSTANCEID

    # Delete the security group
    aws ec2 delete-security-group --group-id $SGID
}else{
    Write-Host 'Instance doesn not exist'
}
