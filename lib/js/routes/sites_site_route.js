
require('app');

App.SitesSiteRoute = Ember.Route.extend({

  model: function(params) {
    return App.Site.find(params.site_id);
  }

});
