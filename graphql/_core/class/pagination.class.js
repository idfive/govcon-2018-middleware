class Pagination {

  constructor(meta, links) {
     this.count = meta.count || null;
     this.next = (links.next) ? true : false;
     this.prev = (links.prev) ? true : false;
  }
}

module.exports = Pagination;
