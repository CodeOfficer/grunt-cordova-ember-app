
window.App = Ember.Application.create({

  rootElement: '#app',

  config: {
    // This Id identifies your application to the Stack Exchange API. Your application client id is not secret, and may be safely embeded in distributed binaries.
    clientId: '1210',

    // Pass this as key when making requests against the Stack Exchange API to receive a higher request quota.
    key: '4HwpIndbQcIGtEJYj5LGaQ(('
  },

  ready: function(){
    // SE.init({
    //   clientId:   this.get('clientId'),
    //   key:        this.get('key'),
    //   channelUrl: 'file://',

    //   complete: function (data) {
    //     console.log('data', data);
    //   }
    // });
  }

});

App.deferReadiness();