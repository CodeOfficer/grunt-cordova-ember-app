
require('specHelper');

describe("Site", function(){
  var store;

  beforeEach(function() {
    Ember.run(function() {
      store = lookupStore();
      store.load(App.Site, {api_site_parameter: 'stackoverflow', name: 'Stack Overflow'})
    });
  });

  it("shouldn't trigger an ajax request when record is in the store", function(){
    var spy = sinon.spy($, 'ajax');

    Ember.run(function() {
      App.Site.find('stackoverflow');
    });

    expect(spy.called).toBeFalsy;
    $.ajax.restore();
  });

  it("should trigger an ajax request when record isn't in the store", function(){
    var spy = sinon.spy($, 'ajax');

    Ember.run(function() {
      App.Site.find('unknown');
    });

    expect(spy.called).toBeTruthy;
    $.ajax.restore();
  });
});