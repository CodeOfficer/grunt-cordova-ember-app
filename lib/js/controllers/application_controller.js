
require('app');

App.ApplicationController = Ember.Controller.extend({

  init: function(){
    console.log('ApplicationController');
    this._super();
  }

});