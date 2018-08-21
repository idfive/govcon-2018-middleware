UMD HUB V1 API Vocabulary Special Instructions
=========================================

The vocabulary endpoint is set up to show available vocabularies coming out of drupal, to then be able to get actual terms through the taxonomy endpoint.

```javascript
{
  vocabulary {
    data {
      vid
      name
      description
    }
  }
}
```

ENDPOINTS
-----------------------------------------
Endpoints available at:
* vocabulary

Essentially, these are a list of machine names of vocabularies in drupal, so that we may hit different jsonapi endpoints coming from the drupal install (for taxonomy endpoint).

```javascript
{
  vocabulary {
    data {
      vid
      name
      description
    }
  }
}
```

AVAILABLE CONTENT FIELDS
-----------------------------------------
For each carousel, you may have:
* vid: VID
* name: String
* description: String

HOW MIDDLEWARE INTERACTS WITH HUB API/OTHERS
-----------------------------------------

The vocabulary endpoint interacts with: http://staging.idfive.com/umd-hub/jsonapi/taxonomy_vocabulary/taxonomy_vocabulary
