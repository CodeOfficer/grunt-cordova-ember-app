
require('app');

App.SitesRoute = Ember.Route.extend({

  init: function(){
    console.log('SitesRoute');
    this._super(arguments);
  },

  model: function() {
    console.log('SitesRoute model');
    return App.Site.find();
  },

  setupController: function(controller, model) {
    controller.set('content', model);
  }

});