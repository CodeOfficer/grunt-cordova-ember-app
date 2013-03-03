
require('app');
require('serializer');

App.RESTAdapter = DS.RESTAdapter.extend({
  serializer: App.JSONSerializer.create(),
  url:        'https://api.stackexchange.com',
  namespace:  '2.1',

  buildURL: function(record, suffix) {
    return this._super(record, suffix) + '?%@&callback=?'.fmt($.param(App.config));
  }
});

App.RESTAdapter.map('App.Site', {
  faviconUrl:            {key: 'favicon_url'},
  highResolutionIconUrl: {key: 'high_resolution_icon_url'},
  iconUrl:               {key: 'icon_url'},
  logoUrl:               {key: 'logo_url'},
  siteUrl:               {key: 'site_url'},
  siteState:             {key: 'site_state'},
  siteType:              {key: 'site_type'},
  launchDate:            {key: 'launch_date'}
});

App.RESTAdapter.map('App.Question', {
  site:             {key: 'site_id'},
  creationDate:     {key: 'creation_date'},
  lastActivityDate: {key: 'last_activity_date'},
  answerCount:      {key: 'answer_count'},
  viewCount:        {key: 'view_count'},
  isAnswered:       {key: 'is_answered'}
});