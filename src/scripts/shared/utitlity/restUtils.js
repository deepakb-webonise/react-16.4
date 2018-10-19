import axios from 'axios';
const RequestService = {
    fetch: (url, data) => {
      return RequestService.request('get', url, data);
    },
  
    save: (url, data) => {
      return RequestService.request('post', url, data);
    },
  
    update: (url, data) => {
      return RequestService.request('put', url, data);
    },

    request: (method, url, data) => {
      //let headers = ''
        return axios({
            method,
            url,
            data
        });
    }
  };

  export default RequestService;