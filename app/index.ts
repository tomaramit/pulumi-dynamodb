import * as aws from "@pulumi/aws";

const db = new aws.dynamodb.Table("mytable", {
    attributes: [
        { name: "Id", type: "S" },
    ],
    hashKey: "Id",
    readCapacity: 1,
    writeCapacity: 1,
});

export let dbout = db;