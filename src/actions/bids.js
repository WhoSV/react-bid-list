import axios from 'axios';

// define axios request for getting data from provided url
export function getBids(success) {
  axios({
    method: 'get',
    responseType: 'json',
    url: 'https://api.jsonbin.io/b/5f563626993a2e110d403821',
  })
    .then(function (res) {
      success(res.data);
    })
    .catch(function (error) {
      console.log(error); // handle error
    });
}
