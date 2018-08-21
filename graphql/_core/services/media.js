const axios = require('axios');
const { URL } = require('url');

class MediaService {

  constructor() { }

  /**
   * Get individual image
   * @param {*} image - JSON API image thumnail relationship object
   */
  getImage(file, image, meta) {
    var urlbuild = 'https://hub.umd.edu/jsonapi/file/file/' + file;
    return axios.get(urlbuild, {
      headers: {
        'X-Consumer-ID': '5f234a05-b434-4d5b-a639-c28d2e4694e3',
      }
    })
      .then(response => {
        let attributes = response.data.data.attributes;
        let url = new URL(urlbuild);
        let derivatives = response.data.data.meta.derivatives;
        //console.log(derivatives);
        return {
          id: attributes.uuid || null,
          url: url.origin + attributes.url || null,
          alt: meta.alt || null,
          width: meta.width || null,
          height: meta.height || null,
          description: image.field_description || null,
          caption: image.field_caption || null,
          url_600_338: derivatives.umd_600_338.replace("http://", "https://") || null,
          url_1200_630: derivatives.umd_1200_630.replace("http://", "https://") || null,
          url_1920_1080: derivatives.umd_1920_1080.replace("http://", "https://") || null,
          url_828_315: derivatives.umd_828_315.replace("http://", "https://") || null,
          url_1500_500: derivatives.umd_1500_500.replace("http://", "https://") || null,
          url_2560_1440: derivatives.umd_2560_1440.replace("http://", "https://") || null
        };
      }).catch(error => {
        console.log(error);
        return {};
      });
  }

  /**
   * Get individual video from local
   * @param {*} video - JSON API video relationship object
   */
  getVideo(video, internal, name, description, run_time) {
    return axios.get(video.links.related)
      .then(response => {
        let attributes = response.data.data.attributes;
        let vidUrl = attributes.uri.url;
        if (internal) {
          let baseUrl = new URL(video.links.related);
          vidUrl = baseUrl.origin + vidUrl;
        } else {
          vidUrl = vidUrl.replace("/watch/", "/embed/");
          vidUrl = vidUrl.replace("http://", "https://");
        }
        return {
          id: attributes.uuid || null,
          title: name || null,
          url: vidUrl || null,
          description: description || null,
          running_time: run_time || null
        };
      }).catch(error => {
        return {};
      });
  }

}

module.exports = MediaService;
