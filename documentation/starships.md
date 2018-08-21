UMD HUB V1 API Events Special Instructions
=========================================

ENDPOINTS
-----------------------------------------
Endpoints available at:
* event (for single event)
* events (for multiple events)

EVENT BY ID
-----------------------------------------
Pass the story ID to the endpoint:

```javascript
{
  story(id: "ID-OF-STORY-HERE") {
    data {
      title
    }
  }
}
```

EVENTS AVAILABLE FILTERS
-----------------------------------------
Use the following parameters to filter events on the events endpoint:

  * promote | Boolean | true, false
  * initiative | [Int] | TID from initiatives field
  * topic | [Int] | TID from topics field
  * school | [Int] | TID from schools field
  * media_type | [Int] | TID from media_types field
  * audience | [Int] | TID from audiences field
  * message_area | [Int] | TID from message_areas field
  * section | [Int] | TID from sections field
  * author | String | ID from authors field

```javascript
{
  events(filter: {promote: true, school: [DESIRED_TID_IN_INT_FORMAT]}) {
    data {
      title
    }
  }
}
```

Multiple filters may be used in the following fashion: filter: "{section: [TID,TID], school: [TID]}"

EVENTS AVAILABLE DATE FILTERS
-----------------------------------------
Use the following parameters to filter events on the events endpoint by date:

  * field | String | "start_date", "end_date"
  * operator | String | "<", "<=", ">", ">=", "="
  * date | String | "YYYY-MM-DDTHH:MM:ss", "now"

For the date field, you may pass a date string in the above format, or simply use "now" if you wish to use the current time and date.

```javascript
{
  events(date: {field: "start_date", date: "2018-01-01T21:00:00", operator: "<="}) {
    data {
      title
    }
  }
}
```

```javascript
{
  events(date: {field: "start_date", date: "now", operator: ">="}) {
    data {
      title
    }
  }
}
```

EVENTS AVAILABLE PAGINATION
-----------------------------------------
Use the following parameters to limit/page news articles on the stories endpoint:

  * limit | Int | the number of stories per page
  * offset | Int | number of pages to offset. "offset: 1" would be page 2.

The Pagination query is also available, and consists of the following:

  * count | int | The total number of results available for that query
  * prev | Boolean | If there is a previous page of results
  * next | Boolean | If there is a next page of results

These should help with pagination/calls from the frontend, if needed.

```javascript
{
  events(page: {limit: 5, offset: 1}) {
    pagination {
      count
      prev
      next
    }
    data {
      title
    }
  }
}
```

EVENTS AVAILABLE SORT
-----------------------------------------
Use the following parameters to sort events on the events endpoint:

  * field | String | available fields:
    * title | Title of article
    * start_date | Start Date of Event
    * end_date | End Date of Event
  * direction | Direction | ASC, DESC

```javascript
{
  events(sort: {field: "start_date", direction: ASC}) {
    data {
      title
    }
  }
}
```

AVAILABLE CONTENT FIELDS
-----------------------------------------
For each news story, you may have:
* id: ID
* nid: String
* slug: String
* title: String
* start_date: [Date]
    * unformatted: String | 2018-01-01T20:00:00
    * formatted_long: String | January 1, 2018 8:00 PM
    * formatted_short: String | Jan 1 2018
    * time: String | 8:00 PM
    * unix: String | 1514862000
* end_date: [Date]
    * unformatted: String | 2018-01-01T20:00:00
    * formatted_long: String | January 1, 2018 8:00 PM
    * formatted_short: String | Jan 1 2018
    * time: String | 8:00 PM
    * unix: String | 1514862000
* body: String
* summary: String
* promote: Boolean
* locations: [TaxonomyTerm]
    * name | String
    * tid | String
    * slug | String
* types: [TaxonomyTerm]
    * name | String
    * tid | String
    * slug | String
* initiatives: [TaxonomyTerm]
    * name | String
    * tid | String
    * slug | String
* topics: [TaxonomyTerm]
    * name | String
    * tid | String
    * slug | String
* schools: [TaxonomyTerm]
    * name | String
    * tid | String
    * slug | String
* media_types: [TaxonomyTerm]
    * name | String
    * tid | String
    * slug | String
* audiences: [TaxonomyTerm]
    * name | String
    * tid | String
    * slug | String
* tags: [TaxonomyTerm]
    * name | String
    * tid | String  
    * slug | String
* address | [Address]
    * country_code | String
    * address_line_1 | String
    * address_line_2 | String
    * city | String
    * state | String
    * zipcode | String
* images: [Image] | See image documentation
* link | String

```javascript
{
  story(id: "ID-OF-EVENT-HERE") {
    data {
      id
      title
      summary
      promote
      start_date {
        unformatted
        formatted_long
        formatted_short
        time
        unix
      }
      end_date {
        unformatted
        formatted_long
        formatted_short
        time
        unix
      }
      topics {
        name
        tid
      }
      schools {
        name
        tid
      }
      initiatives {
        name
        tid
      }
      media_types {
        name
        tid
      }
    }
  }
}
```

HOW MIDDLEWARE INTERACTS WITH HUB API/OTHERS
-----------------------------------------
The events endpoint interacts with: http://staging.idfive.com/umd-hub/jsonapi/node/event
