
require('lib/js/app');

App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});