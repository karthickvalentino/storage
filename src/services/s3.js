const AWS = require("aws-sdk");

class S3Storage {
    constructor(options = {}) {
        this.client = new AWS.S3({
            region: options.region || "us-east-1",
            signatureVersion: "v4",
        });
    }

    async list(options) {
        return this.client.listObjects(options).promise();
    }

    async createDirectory() {
        return;
    }

    async read(options) {
        return this.client
            .getObject({ Key: options.path, ...options })
            .promise();
    }

    async write(path, data, options) {
        return this.client.putObject({ Key: path, Body: data, ...options });
    }
}

module.exports = S3Storage;
