
require('app');

App.SitesIndexRoute = Ember.Route.extend({

  model: function() {
    return this.modelFor('sites');
  },

  setupController: function(controller, model) {
    controller.set('content', model);
  }

});
