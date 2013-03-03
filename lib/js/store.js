
require('app');
require('serializer');
require('adapter');

App.Store = DS.Store.extend({
  revision: 11,

  adapter: App.RESTAdapter.create()
});