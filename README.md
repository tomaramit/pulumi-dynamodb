# Pulumi implementation for dynamodb table creation

Pulumi implementation for dynamodb table creation

### update aws credentials to access your AWS account 

``` no-highlight
Update credentials file with your AWS Access key Id and Key 
aws_access_key_id=<your aws accerss key id> 
aws_secret_access_key=<your aws accerss key>
```
## Building docker images
``` bash
docker build . -t pulumi-dynamodb:v1.0
```
## Running docker images
``` bash
docker run  -it pulumi-dynamodb:v1.0
```

## output logs 
``` no-highlight
     Type                   Name                       Status
 +   pulumi:pulumi:Stack    aws-ts-eks-pulumi-vpc-app  created
 +   └─ aws:dynamodb:Table  mytable                    created

Outputs:
    dbout: {
        arn                   : "arn:aws:dynamodb:us-west-2:*****************:table/mytable-f3af7c2"
        attributes            : [
            [0]: {
                name: "Id"
                type: "S"
            }
        ]
        billingMode           : "PROVISIONED"
        hashKey               : "Id"
        id                    : "mytable-f3af7c2"
        name                  : "mytable-f3af7c2"
        pointInTimeRecovery   : {
            enabled: false
        }
        readCapacity          : "1"
        streamEnabled         : false
        urn                   : "urn:pulumi:pulumi-vpc-app::aws-ts-eks::aws:dynamodb/table:Table::mytable"
        writeCapacity         : "1"
    }

Resources:
    + 2 created
  ```  
 ## dynamodb table is created and ready to use using arn as above output   
