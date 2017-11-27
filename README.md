# vue-http-manager
vue axios http wrapper

## installation

### npm 
```bash
npm install vue-http-manager --save
```

### yarn
```bash
yarn add vue-http-manager
```

## usage
then use it like so:
```js
import VueHttp from 'vue-http-manager';
Vue.use(VueHttp);

//You can use all of http methods 
//get, delete, head, options, post, put, patch 

this.$http.get('/oauth/getInfo', {params: it is optional => userId: 95})
    .then(function (response) {
        console.log(response);  
    })
    .catch(function (error) {
        console.log(error);
    });
    
//OR use recource object
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
this.$http.request('auth.register', {name: 'test', ...})
    .then(function (response) {
        console.log(response);  
    })
    .catch(function (error) {
        console.log(error);
    });
```
