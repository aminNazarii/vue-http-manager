import axios from 'axios';

export default {
    install (Vue, options) {
        Vue.prototype.$http = this;
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
    request(name, data, config) {
        let recources = require('../http/recources.json');
        let resource = _.get(recources, name);

        return this.axios[resource.method](resource.uri, data, config);
    },
    axios,
}