import Endpoint from '@/config/endpoint'
import axios from 'axios'

export const postToEndpoint = (body: Object) => {
  let data = JSON.stringify(body);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: Endpoint.registerApplyer,
    headers: {},
    data : data
  };

  return axios.request(config)
      .then((response) => {
        return JSON.stringify(response.data)
      })
      .catch((error) => {
        return "error"
      });
}


