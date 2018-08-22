var _ = require('lodash');
const truncate = require('truncate-html');

/* abstract */ class Node {

  /**
   * Constructor
   * @param {*} data
   * @param {*} included
   */
  constructor(data, included) {
    let attributes = data.attributes;
    this.id = attributes.id || attributes.nid;

    // title and body not required on nodes, but included here since they appear in most cases
    this.title = attributes.title;
    this.body = attributes.body ? attributes.body.value : null;
    this.summary = !this.body ? null : !attributes.body.summary ? truncate(this.body, 20, { byWords: true, stripTags: true }) : attributes.body.summary;

    this._relationships = {};
    this.included = included;
  }

  /**
   * Get included objects for specified relationship
   * @param {*} key
   */
  _getIncluded(key) {
    var result = [];

    // For multiple fields
    if (this._relationships[key] && this._relationships[key].length > 0) {
      for (var i = 0; i < this._relationships[key].length; i++) {
        for (var x = 0; x < this.included.length; x++) {
          if (this._relationships[key][i].type === this.included[x].type && this._relationships[key][i].id === this.included[x].id) {
            result.push(this.included[x]);
          }
        }
      }
    } else {
      for (var x = 0; x < this.included.length; x++) {
        if (!this._relationships[key]) continue;
        if (this._relationships[key].type === this.included[x].type && this._relationships[key].id === this.included[x].id) {
          result.push(this.included[x]);
        }
      }
    }

    return result;
  }

}

module.exports = Node;
