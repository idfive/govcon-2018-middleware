const _ = require('lodash');
const VocabularyTermWrapper = require('../vocabulary/vocabulary_wrapper.class');
const VocabularyTermWrapperService = require('../vocabulary/vocabulary_wrapper.service');
const vocabularyTermWrapperService = new VocabularyTermWrapperService();

module.exports = {
  vocabulary: (args) => vocabularyTermWrapperService.get(args)
    .then(response => new VocabularyTermWrapper(response.data, response.data.included || {}))
};
