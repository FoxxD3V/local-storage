## Simple and Browser-Independent Local Storage Helper based on Underscore JS

This module is a simple wrapper around the Local Storage helper. It requires Underscore JS: [https://github.com/jashkenas/underscore](https://github.com/jashkenas/underscore).

### Installation

```
npm install local-storage
```

### Usage

```javascript
// Import the module
const local_storage = require('local-storage');

// Set a value
local_storage.set('key', 'value');

// Get a value
const value = local_storage.get('key');

// Remove a value
local_storage.remove('key');

// List all keys
const keys = local_storage.keys();

// List all values
const values = local_storage.values();
```

### Examples

```javascript
// Set a value
local_storage.set('name', 'John Doe');

// Get a value
const name = local_storage.get('name');
console.log(name); // "John Doe"

// Remove a value
local_storage.remove('name');

// List all keys
const keys = local_storage.keys();
console.log(keys); // []

// List all values
const values = local_storage.values();
console.log(values); // []
```

### Functions

* `set(key, value)`: Sets a value in Local Storage.
* `get(key)`: Gets a value from Local Storage.
* `remove(key)`: Removes a value from Local Storage.
* `keys()`: Lists all keys in Local Storage.
* `values()`: Lists all values in Local Storage.

### License

This module is licensed under the MIT License.
