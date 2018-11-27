# test-serverless

using serverless framework to create aws lambda functions connected to the related api gateway

## Commands

Each command must be executed within the service folder `cd {service}` except from create

### Create

```sls create --template aws-nodejs --path myService```

### Deploymnet

```sls deploy --stage dev --region eu-central-1``` 

### Remove

```sls remove --stage dev --region eu-central-1```

## AWS concepts

CloudFormation -> templating system for aws resources
Cognito User Pool -> user database
Cognito Federated Identities -> sessions