# vue-http-manager
vue axios http wrapper


## npm

- [visit npm page](https://www.npmjs.com/package/vue-http-manager)


## Installation

You can install it via [yarn](https://yarnpkg.com/) or [NPM](http://npmjs.org/).

```bash
$ npm install vue-http-manager --save

$ yarn add vue-http-manager
```

## Usage
```js
import VueHttp from 'vue-http-manager';
Vue.use(VueHttp);
```

## Example


### You can use all of http methods
- get
- delete
- head
- options
- post
- put
- patch

```js
this.$http.get('/oauth/getInfo', {params: optional}) // {userId: 95, ...} 
    .then(function (response) {
        console.log(response);  
    })
    .catch(function (error) {
        console.log(error);
    });
```
    
    
### OR use recource object

```js
let resource ={
  auth: {
    register: {
      uri: "/oauth/register",
      method: "post"
    },
    getInfo: {
      uri: "/oauth/getInfo/{userId}",
      method: "get"
    }
  }
};

// resource can be a json file
// VueHttp.setResources(require('./recources.json'));

VueHttp.setResources(resource);

let requestData = {
    name: 'amin nazari',
    age: 22,
    ...
};

this.$http.request('auth.register', {requestData})
    .then(function (response) {
        console.log(response);  
    })
    .catch(function (error) {
        console.log(error);
    });
```
