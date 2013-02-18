
require('specHelper');

describe('App', function(){
  var container = App.__container__;

  describe('reset()', function(){
    it('creates a new container once', function(){
      expect(container).not.to.equal(App.__container__);
      container = App.__container__;
    });

    it('creates a new container twice', function(){
      expect(container).not.to.equal(App.__container__);
    });

    it('keeps the app initialized', function(){
      expect(App.get('isInitialized')).to.equal(true);
    });
  });

});