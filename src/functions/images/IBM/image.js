const IBM = require('ibm-cos-sdk');
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../../.env") });
console.log(process.env.ibmEndpoint)
var config = {
    endpoint: process.env.ibmEndpoint,
    apiKeyId:  process.env.ibmApiKeyId,
    serviceInstanceId: process.env.ibmServiceInstanceId,

};
var cos = new IBM.S3(config);

async function storeBlobAtIBM(itemName, fileText) {
    
    
    
    const result = await cos.putObject({
        Bucket: 'techbloghk', 
        Key: itemName, 
        Body: fileText
    }).promise()
    .then(() => {
        console.log(`Item: ${itemName} created!`);
        return "success";
    })
    .catch((e) => {
        console.error(`ERROR: ${e.code} - ${e.message}\n`);
        return 'error'
    });
    return result
}

async function getProfileImageIBM(itemName) {
    const response = await cos.getObject({
        Bucket: 'techbloghk', 
        Key: itemName
    }).promise()
    .then((data) => {
        if (data != null) {
            console.log('File Contents: ' + Buffer.from(data.Body).toString());
            return data.Body
        }    
    })
    .catch((e) => {
        console.error(`ERROR: ${e.code} - ${e.message}\n`);
        return 'error'    });

    return response;
}

module.exports={storeBlobAtIBM, getProfileImageIBM}