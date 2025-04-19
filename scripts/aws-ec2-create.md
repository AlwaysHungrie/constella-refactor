These commands are used to create 
- a new aws key pair
- a new aws instance with memory and ssh, http, https access from anywhere
- a new aws elastic ip and associate it with the instance
- ssh into the instance

Assume the following variables are set when they are created:

export INSTANCE_ID=
export ALLOCATION_ID=
export PUBLIC_IP=
export SECURITY_GROUP_ID=

> assume aws cli is configured with admin role

aws ec2 create-key-pair \
  --region ap-south-1 \
  --key-name CliGeneratedConstellaKey \
  --query "KeyMaterial" \
  --output text > CliGeneratedConstellaKey.pem

chmod 400 CliGeneratedConstellaKey.pem

aws ec2 describe-images \
  --region ap-south-1 \
  --owners 099720109477 \
  --filters "Name=name,Values=ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*" "Name=state,Values=available" \
  --query "sort_by(Images, &CreationDate)[-1].ImageId" \
  --output text

> use the ami id returned by the above command to create the instance

aws ec2 run-instances \
  --region ap-south-1 \
  --image-id ami-0d01904ee0d806ca5 \
  --instance-type t2.micro \
  --key-name CliGeneratedConstellaKey \
  --block-device-mappings "[{\"DeviceName\":\"/dev/sda1\",\"Ebs\":{\"VolumeSize\":20,\"DeleteOnTermination\":true}}]" \
  --count 1

> get instance id and save it

aws ec2 describe-instances \
  --region ap-south-1 \
  --filters "Name=instance-state-name,Values=running" \
  --query "Reservations[*].Instances[*].[InstanceId,PublicIpAddress,State.Name]" \
  --output table

> get security group id and save it

aws ec2 describe-instances \
  --region ap-south-1 \
  --instance-ids $INSTANCE_ID \
  --query "Reservations[0].Instances[0].SecurityGroups[0].GroupId" \
  --output text

> allow ssh, http, https from anywhere

aws ec2 authorize-security-group-ingress \
  --region ap-south-1 \
  --group-id $SECURITY_GROUP_ID \
  --protocol tcp \
  --port 22 \
  --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
  --region ap-south-1 \
  --group-id $SECURITY_GROUP_ID \
  --protocol tcp \
  --port 80 \
  --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
  --region ap-south-1 \
  --group-id $SECURITY_GROUP_ID \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0

> allow outbound traffic

aws ec2 authorize-security-group-egress \
  --region ap-south-1 \
  --group-id $SECURITY_GROUP_ID \
  --protocol tcp \
  --port 0-65535 \
  --cidr 0.0.0.0/0

> get allocation id and save it

aws ec2 allocate-address \
  --region ap-south-1 \
  --domain vpc

> replace with instance id and allocation id

aws ec2 associate-address \
  --region ap-south-1 \
  --instance-id $INSTANCE_ID \
  --allocation-id $ALLOCATION_ID

> verify asssociation and save public ip

aws ec2 describe-addresses \
  --region ap-south-1

> ssh into the instance

export EC2_DNS="ec2-$(echo $PUBLIC_IP | tr '.' '-').ap-south-1.compute.amazonaws.com"
ssh -i CliGeneratedConstellaKey.pem ubuntu@$EC2_DNS
