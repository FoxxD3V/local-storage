# localstorage

simple helper object for persisting and handling any type of data in localstorage

```
requires https://github.com/jashkenas/underscore
```
___
# localstorage for angular

Simple module wrapper around the local storage helper. 

```
requires https://github.com/jashkenas/underscore
```

## Usage
To use it you need to set undersocre as global window variable.
Once you included underscore, you can use the module like you always do in AngularJS.

### Include underscore with browserify
```javascript
window._ = require('underscore');
````

### Include underscore Without browserify
Simply include underscore into your template
```html
<script src="/path_to_underscore/underscore-min.js"></script>
```
