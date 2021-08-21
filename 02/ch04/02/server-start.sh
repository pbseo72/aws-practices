#! /bin/bash -e

echo '[1] Get the ID of Amazon Linux AMI...'
AMIID=$(aws ec2 describe-images --query "Images[?Description=='Amazon Linux 2 AMI 2.0.20210326.0 x86_64 HVM gp2'].ImageId" --output text)

echo '[2] Get the default VPC ID...'
VPCID=$(aws ec2 describe-vpcs --query "Vpcs[?isDefault==true].VpcId" --output text)

echo '[3] Get the default subnet ID...'
SUBNETID=$(aws ec2 describe-subnets --query "(Subnets[?VpcId=='"$VPCID"'].SubnetId)[0]" --output text)

echo '[4] Create a security group...'
SGNAME='mysecuritygroup'
SGID=$(aws ec2 create-security-group --group-name $SGNAME --description "My Security Group" --vpc-id $VPCID --output text)

echo '[5] Allow inbound SSH connections...'
aws ec2 authorize-security-group-ingress --group-id $SGID --protocol tcp --port 22 --cidr 0.0.0.0/0

echo '[6] Create and start the server...'
INSTANCETYPE='t2.micro'
KEYNAME='mykey2'
INSTANCEID=$(aws ec2 run-instances --image-id $AMIID --instance-type $INSTANCETYPE --security-group-ids $SGID --subnet-id $SUBNETID --key-name $KEYNAME --query "Instances[0].InstanceId" --output text)

echo "waiting for $INSTANCEID..."
aws ec2 wait instance-running --instance-ids $INSTANCEID

echo '[7] Get the public name of server...'
PUBLICNAME=$(aws ec2 describe-instances --instance-ids $INSTANCEID --query "Reservations[0].Instances[0].PublicDnsName" --output text)

echo "$INSTANCEID is accepting SSH connections under $PUBLICNAME"
echo "ssh -i $KEYNAME.pem ec2-user@$PUBLICNAME"