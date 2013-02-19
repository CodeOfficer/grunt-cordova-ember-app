
require('app');

App.Router.map(function(){
  this.resource('sites', function() {
    this.route('site', {path: ':site_id'});
  });
});