## 예제 실행(AWS STACK 생성하기)

### ex03
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex03.json --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```

### ex04
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex04.json --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```

### ex05
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex05.json --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```

### ex06
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex06.json --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```


### ex07
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex07.json --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```

### ex08
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex08.json --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```

### ex09
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex09.json --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```