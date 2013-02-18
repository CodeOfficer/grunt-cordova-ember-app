
require('app');

App.SitesIndexRoute = Ember.Route.extend({

  model: function() {
    return this.modelFor('sites');
  }

});
