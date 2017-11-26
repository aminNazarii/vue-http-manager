# vue-http
vue axios http wrapper



## usage
then use it like so:
```js
import VueAxios from 'vue-http';
Vue.use(VueHttp);

//You can use all of http methods 
//get, delete, head, options, post, put, patch 

this.$http.get()
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
