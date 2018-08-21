UMD HUB API DEVELOPMENT NOTES
===================

This API is designed to take GraphQl queries, and subsequently send requests to a drupal 8 REST (JSON API) endpoint (UMD Today Drupal Install), then return results. Specifics on the drupal JSON API format/query structure should be looked it in its docs (https://www.drupal.org/docs/8/modules/json-api).

Other endpoints/calls/services can be added in the future if necessary, to go to the UMD Today drupal JSON API, or any API endpoint desired.

BYNDER
-----------------------------------------
This API is designed to work with the Bynder DAM module in drupal. Images may be on bynder, or on the UMD Today Drupal install server. We parse here to see which of those it is, and then adjust the callback to get information from one of those two places. API tokens/etc are hardcoded into the BYnder service, and must be changed there if they ever change.

ADDING FIELDS (GENERAL OVERVIEW)
-----------------------------------------
In general, fields will need to be added in the UMD Today Drupal Install, and then added to the API here.

For example, if you wished to add "field_my_new_field" (a string text field) from the drupal install to the API, you would need to:
  * Add "my_new_field: String" to graphql/event/event.schema.js.
  * Add "this.my_new_field = attributes.field_my_new_field ? attributes.field_my_new_field.value : null;"  to the constructor in graphql/event/event.class.js.

Obviously, different field types will need more complex setup, this is only a simple example. In general, it may be best to look at existing integrations of that field type, and copy over.

GENERAL CONCEPTS OF THE MIDDLEWARE
-----------------------------------------
  * The actual express server setup/run/whitelist/etc is controlled in server.js.
  * The API is controlled in /graphql. There is a /core folder which holds common config/etc, and folders for each content/media type. each content/media type folder is more or less self contained, and may contain some/all of the following:
    * class.js: Contains the constructors/etc. Some are extensions of core Node class.
    * resolver.js: This holds information on endpoints, if the type has one.
    * schema.js: Defines the type.
    * service.js: Defines fields/includes/etc that need to be sent to the jsonapi out of drupal.
  * All calls to an endpoint get wrapped in a "data" array, so that we can also return pagination information. What this means is, we have made "wrapper classes" for all the endpoints.
