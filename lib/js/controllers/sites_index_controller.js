
require('app');

App.SitesIndexController = Ember.ArrayController.extend({

  init: function(){
    console.log('SitesIndexController');
    this._super(arguments);
  }

});