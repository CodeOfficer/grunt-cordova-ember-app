
require('app');

App.SitesController = Ember.ArrayController.extend({

  init: function(){
    console.log('SitesController');
    this._super(arguments);
  }

});