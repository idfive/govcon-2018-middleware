const Service = require('../_core/services/service.swapi');

class StarWarsWrapperService extends Service {

  constructor() {
    super();

    this.endpoint = '/starships';

    this.sort = {
      'title': 'title'
    };
  }

}

module.exports = StarWarsWrapperService;
