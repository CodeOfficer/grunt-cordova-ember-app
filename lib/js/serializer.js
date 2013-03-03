
require('app');

App.JSONSerializer = DS.JSONSerializer.extend({
  primaryKey: function(type) {
    if (type.toString() === 'App.Site') {
      return 'api_site_parameter';
    }

    if (type.toString() === 'App.Question') {
      return 'question_id';
    }

    return 'id';
  },

  extractMany: function(loader, json, type, records) {
    if (type.toString() === 'App.Site') {
      return this._super(loader, {sites: json.items}, type, records);
    }

    if (type.toString() === 'App.Question') {
      return this._super(loader, {questions: json.items}, type, records);
    }

    return this._super(loader, json, type, records);
  }
});