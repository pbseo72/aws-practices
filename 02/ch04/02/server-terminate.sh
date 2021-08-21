#! /bin/bash -e

PUBLICNAME=''

while [ -z $PUBLICNAME ]
do
    echo -n "public name of server: "
    read PUBLICNAME
done

# Get Instance ID & Security Group ID
ARR=($(aws ec2 describe-instances --query "Reservations[*].Instances[?PublicDnsName=='"$PUBLICNAME"'].[InstanceId, SecurityGroups[0].GroupId]" --output text))
INSTANCEID=${ARR[0]}
SGID=${ARR[1]}

if [ -n "$INSTANCEID" ]
then
    # Terminate the server(silently)
    aws ec2 terminate-instances --instance-ids $INSTANCEID > /dev/null
    echo "terminating $INSTANCEID ..."
    aws ec2 wait instance-terminated --instance-ids $INSTANCEID

    # Delete the security group
    aws ec2 delete-security-group --group-id $SGID
else
   echo 'Instance doesn not exist'
fi