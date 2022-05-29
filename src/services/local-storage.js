const fspromise = require("fs/promises");

class StorageLocal {
    constructor() {}

    async list(options) {
        return fspromise.readdir(options.path);
    }

    async createDirectory(options) {
        return fspromise.mkdir(options);
    }

    async read(options) {
        return fspromise.readFile(options);
    }

    async write(path, data) {
        return fspromise.writeFile(path, data);
    }
}

module.exports = StorageLocal;
