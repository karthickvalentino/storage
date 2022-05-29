const StorageLocal = require("./services/local-storage");
const S3Storage = require("./services/s3");

class Storage {
    #type;
    #options;
    #client;
    constructor(type = "local", options = {}) {
        this.#type = type;
        this.#options = options;
        this.#client = null;
        this.#init();
    }
    #init() {
        switch (this.#type) {
            case "local":
                this.#client = new StorageLocal();
                break;

            case "S3":
                this.#client = new S3Storage();
                break;
            default:
                throw "Invalid storage type";
        }
    }

    list(options = { path: "" }) {
        return this.#client.list(options);
    }

    createDirectory(options = {}) {
        return this.#client.createDirectory(options);
    }

    read(options = { path: "" }) {
        return this.#client.read(options);
    }

    write(path, data, options) {
        return this.#client.write(path, data, options);
    }
}

module.exports = Storage;
