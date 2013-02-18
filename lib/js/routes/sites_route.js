
require('app');

App.SitesRoute = Ember.Route.extend({

  model: function() {
    return App.Site.find();
  },

  setupController: function(controller, model) {
    controller.set('content', model);
  }

});