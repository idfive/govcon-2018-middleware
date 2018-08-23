const ServiceD7 = require('../_core/services/service.d7');
const serviceD7 = new ServiceD7();
const ServiceD8 = require('../_core/services/service.d8');
const serviceD8 = new ServiceD8();
const ServiceSwapi = require('../_core/services/service.swapi');
const serviceSwapi = new ServiceSwapi();

class AllStarsWrapperService {

  get(args) {

    return serviceSwapi.get().then(response1 => {
      return serviceD8.get().then(response2 => {
        return serviceD7.get().then(response3 => {
          response2.data.data.forEach(function(each) {
            response3.data.data.push(each);
          });
          response1.data.results.forEach(function(each) {
            response3.data.data.push(each);
          });

          return response3;

        });
      });
    });
  }

}

module.exports = AllStarsWrapperService;
