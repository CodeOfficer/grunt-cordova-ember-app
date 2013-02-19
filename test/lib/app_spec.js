
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

// describe('App', function(){
//   var spy, server;

//   before(function(){
//     server = this.server;
//     spy = sinon.spy(jQuery, 'ajax');
//   });

//   afterEach(function(){
//     spy.reset();
//   });

//   it('can spy on ajax requests', function(){
//     Ember.run(function(){
//       $("#sites").click();
//       // server.respond();
//     });
//     expect(spy.called).to.equal(true);
//   });

//  it('can again spy on ajax requests', function(){
//     Ember.run(function(){
//       $("#index").click();
//       // server.respond();
//     });
//     expect(spy.called).to.not.equal(true);
//   });

// });
