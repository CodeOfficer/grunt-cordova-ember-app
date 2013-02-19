
Ember.testing = true;

// before ...

before(function(){
  Ember.run(function() {
    App.reopen({
      LOG_TRANSITIONS: true
    });
    App.Router.reopen({
      location: 'none'
    });
  });
});

beforeEach(function(){
  Ember.run(function() {
    App.reset();
  });
});