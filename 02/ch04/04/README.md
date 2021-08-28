## 예제 실행(AWS STACK 생성하기)

### ex03
```bash
$ aws cloudformation create-stack --stack-name myserver --template-body https://raw.githubusercontent.com/pbseo72/aws-practices/main/02/ch04/04/ex03.json?token=ANQAKMTZFO3HC5S2CE3BHMLBFGJHW --parameters ParameterKey=KeyName,ParameterValue=mykey ParameterKey=VPC,ParameterValue=vpc-b4a03fdf ParameterKey=InstanceType,ParameterValue=t2.micro

$ aws cloudformation describe-stacks --stack-name myserver --query Stacks[0].Outputs

$ aws cloudformation delete-stack --stack-name myserver
```