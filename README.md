# storage

A common storage for local file storage and cloud

#Usage

```const Storage = require('storage');
const storage = new Storage(process.env.NODE_ENV === 'localhost' ? 'local': 's3');

const dirList = await storage.list({path: '/'})
```
