UMD HUB V1 API Taxonomy Term Special Instructions
=========================================

Taxonomy terms are available on their own endpoint, as well as through endpoints of content types that support them (individual fields on Page, Article, External Article/etc).

```javascript
{
  taxonomy(filter: {vocabulary: "MACHINE_NAME_OF_DESIRED_VOCABULARY"}) {
    data {
      tid
      name
    }
  }
}
```

ENDPOINTS
-----------------------------------------
Endpoints available at:
* taxonomy (for specified vocabulary)

TAXONOMY AVAILABLE PAGINATION
-----------------------------------------
Use the following parameters to limit taxonomies on the taxonomy endpoint:

  * limit | Int | the number of stories per page
  * offset | Int | number of pages to offset. "offset: 1" would be page 2.

The Pagination query is also available, and consists of the following:

  * count | int | The total number of results available for that query
  * prev | Boolean | If there is a previous page of results
  * next | Boolean | If there is a next page of results

These should help with pagination/calls from the frontend, if needed.

```javascript
{
  taxonomy(filter: {vocabulary: "MACHINE_NAME_OF_DESIRED_VOCABULARY"}, page: {limit: 5, offset: 0}) {
    pagination {
      count
      prev
      next
    }
    data {
      tid
      name
      slug
    }
  }
}
```

TAXONOMY TERM AVAILABLE FILTERS
-----------------------------------------
Use the following parameters to filter terms on the taxonomy terms endpoint:

  * vocabulary | String | Machine name of vocabulary

The choices here can come from the vocabulary endpoint, and are as follows (as of launch):

  * audience
  * colleges_and_schools
  * event_location
  * event_type
  * media_type
  * messaging_areas
  * person_type
  * priorities_and_initiatives_
  * sections
  * tags
  * topics

Essentially, these are a list of machine names of vocabularies in drupal, so that we may hit different jsonapi endpoints coming from the drupal install.

```javascript
{
  taxonomy(filter: {vocabulary: "MACHINE_NAME_OF_DESIRED_VOCABULARY"}) {
    data {
      tid
      name
      slug
    }
  }
}
```

AVAILABLE CONTENT FIELDS
-----------------------------------------
For each term, you may have:
* tid: TID
* name: String
* slug: String

HOW MIDDLEWARE INTERACTS WITH HUB API/OTHERS
-----------------------------------------

The taxonomy endpoint interacts with: http://staging.idfive.com/umd-hub/jsonapi/taxonomy_term/VOCABULARY_NAME
