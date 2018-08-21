const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const axios = require('axios');

class BynderService {

  constructor() {

    this.baseUrl = 'https://brandportal.umd.edu/api/v4';
    this.consumer_key = 'C12C40CD-8CCC-4D70-B05AC6177D25C51C';
    this.consumer_secret = '56d2ec1d5fd3aca1c6579c87635b18a8';
    this.token = '0B346BDC-5FDF-4766-A28E7971D4C9F355';
    this.token_secret = 'd57fc0f60d6645bb5daf11396aafb82d';

    this.oauth = OAuth({
      consumer: { key: this.consumer_key, secret: this.consumer_secret },
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return crypto.createHmac('sha1', key).update(base_string).digest('base64');
      },
      parameter_seperator: ','
    });

    this.tokenPair = {
      key: this.token,
      secret: this.token_secret
    };

  }

  /**
   * Get individual asset by id
   * @param {*} id
   */
  getAsset(id) {

    const request_data = {
      url: this.baseUrl + '/media/' + id + '/',
      method: 'GET'
    };

    return axios.get(request_data.url, {
      headers: this.oauth.toHeader(this.oauth.authorize(request_data, this.tokenPair))
    }).then(response => {
      let attributes = response.data;
      return {
        id: attributes.id || null,
        url: attributes.thumbnails.thul || null,
        alt: attributes.description || null,
        width: attributes.width || null,
        height: attributes.height || null,
        description: attributes.description || null,
        caption: attributes.property_photographer[0] || null,
        url_600_338: attributes.thumbnails.Medium || null,
        url_1200_630: attributes.thumbnails.Large || null,
        url_1920_1080: attributes.thumbnails['Hero Dimensions'] || null,
        url_828_315: attributes.thumbnails['FB Cover'] || null,
        url_1500_500: attributes.thumbnails['Twitter Cover'] || null,
        url_2560_1440: attributes.thumbnails['Youtube Cover'] || null
      };
    }).catch(error => {
      console.log(error);
      return {};
    });
  }

}

module.exports = BynderService;
