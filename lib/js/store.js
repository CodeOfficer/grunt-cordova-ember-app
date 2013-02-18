
require('app');

App.JSONSerializer = DS.JSONSerializer.extend({
  init: function(){
    this._super();
    this.map('App.Site', {
      primaryKey: 'api_site_parameter'
    });
  },

  extractMany: function(loader, json, type, records) {
    if (type.toString() === 'App.Site') {
      return this._super(loader, {sites: json.items}, type, records);
    }

    return this._super(loader, json, type, records);
  }
});

App.RESTAdapter = DS.RESTAdapter.extend({
  serializer: App.JSONSerializer.create(),

  url: 'https://api.stackexchange.com',

  namespace: '2.1',

  buildURL: function(record, suffix) {
    return this._super(record, suffix) + '?%@&callback=?'.fmt($.param(App.config));
  }
});


App.Store = DS.Store.extend({
  revision: 11,

  adapter: 'App.RESTAdapter'
});