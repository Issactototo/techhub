const os = require("oci-objectstorage");
const common = require("oci-common");
const fs = require("fs");

const common = require("oci-common");
// Using default configurations
// Using personal configuration
const configurationFilePath = "../.oci/coinfig";
const configProfile = "DEFAULT";
const provider = new common.ConfigFileAuthenticationDetailsProvider(
  configurationFilePath,
  configProfile
);

const bucket = "hk-tech-blog" ;
const object = args[2];

const client = new os.ObjectStorageClient({
  authenticationDetailsProvider: provider
});


async function storeImageAtOracle(){

    const putObjectRequest = {
        namespaceName: namespace,
        bucketName: bucket,
        putObjectBody: objectData,
        objectName: object
      };
      const putObjectResponse = await client.putObject(putObjectRequest);
      console.log("Put Object executed successfully" + putObjectResponse);

    return '123'
}
