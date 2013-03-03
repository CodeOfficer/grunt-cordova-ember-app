
// aliases: Array[1]
// api_site_parameter: "stackoverflow"
// audience: "professional and enthusiast programmers"
// favicon_url: "http://cdn.sstatic.net/stackoverflow/img/favicon.ico"
// high_resolution_icon_url: "http://cdn.sstatic.net/stackoverflow/img/apple-touch-icon@2.png"
// icon_url: "http://cdn.sstatic.net/stackoverflow/img/apple-touch-icon.png"
// launch_date: 1221436800
// logo_url: "http://cdn.sstatic.net/stackoverflow/img/logo.png"
// markdown_extensions: Array[1]
// name: "Stack Overflow"
// related_sites: Array[1]
// site_state: "normal"
// site_type: "main_site"
// site_url: "http://stackoverflow.com"
// styling: Object

require('app');

App.Site = DS.Model.extend({
  questions:             DS.hasMany('App.Question'),

  name:                  DS.attr('string'),
  audience:              DS.attr('string'),
  faviconUrl:            DS.attr('string'),
  highResolutionIconUrl: DS.attr('string'),
  iconUrl:               DS.attr('string'),
  logoUrl:               DS.attr('string'),
  siteUrl:               DS.attr('string'),
  siteState:             DS.attr('string'),
  siteType:              DS.attr('string'),
  launchDate:            DS.attr('date')
});