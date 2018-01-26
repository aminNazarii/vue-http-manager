import axios from 'axios';

export default {
    resources: {},
    axios,
    /**
     *
     * @param Vue
     * @param options
     */
    install(Vue, options) {
        this.get = this.axios.get;
        this.delete = this.axios.delete;
        this.head = this.axios.head;
        this.options = this.axios.options;
        this.post = this.axios.post;
        this.put = this.axios.put;
        this.patch = this.axios.patch;
        Vue.prototype.$http = this;
    },
    /**
     *
     * @param resources
     */
    setResources(resources) {
        this.recources = resources;
    },
    /**
     * Get methods and action url by name
     * name: {
     *  uri: '',
     *  method: '' //get, post, put, ...
     * }
     *
     * @param name
     * @param data
     * @param config
     * @returns {*}
     */
    request(name, {data, params}, config) {
        if (!params) {
            params = null;
        }

        let resource = _.get(this.recources, name);

        let uri = this.makeUri(name, params)

        let useData = data;
        if (resource.method == 'get') {
            useData = {params: data}
        }

        if (resource) {
            return this.axios[resource.method](uri, useData, config);
        }
        return null;
    },

    /**
     *
     * @param name
     * @param params
     */
    makeUri(name, params = null) {
        let resource = _.get(this.recources, name);

        let uri = resource.uri;

        //check uri has params to replace with data
        if (uri.indexOf('{') > -1 && params) {
            _.forEach(params, function (value, key) {
                return uri = _.replace(uri, '{'+ key +'}', value);
            });
        }

        return uri;
    }
}