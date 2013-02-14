
require('lib/js/app');

App.Router.map(function(){
  this.resource('posts');
});

App.PostsRoute = Ember.Router.extend({
  model: function(){
    return App.Post.find();
  }
});