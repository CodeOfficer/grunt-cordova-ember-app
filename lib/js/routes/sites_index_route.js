
require('app');

App.SitesIndexRoute = Ember.Route.extend({

  init: function(){
    console.log('SitesIndexRoute');
    this._super(arguments);
  },

  model: function() {
    // console.log("this.modelFor('sites')", this.modelFor('sites'));
    console.log('SitesIndexRoute model');
    return this.modelFor('sites');
  },

  setupController: function(controller, model) {
    controller.set('content', model);
  }

});
