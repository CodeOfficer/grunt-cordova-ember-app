// "question_id": 15179311,
// "creation_date": 1362257446,
// "last_activity_date": 1362257488,
// "score": 0,
// "answer_count": 1,
// "title": "Apply a stylesheet for both print and screen",
// "tags": [
//   "css"
// ],
// "view_count": 6,
// "owner": {
//   "user_id": 245552,
//   "display_name": "Matthieu",
//   "reputation": 4613,
//   "user_type": "registered",
//   "profile_image": "http://www.gravatar.com/avatar/48906ce482893497d2d7e017cd2f4352?d=identicon&r=PG",
//   "link": "http://stackoverflow.com/users/245552/matthieu",
//   "accept_rate": 82
// },
// "link": "http://stackoverflow.com/questions/15179311/apply-a-stylesheet-for-both-print-and-screen",
// "is_answered": false

require('app');

App.Question = DS.Model.extend({
  site:             DS.belongsTo('App.Site'),
  // owner:         DS.belongsTo('App.User'),
  // tags:          DS.hasMany('App.Tag')

  creationDate:     DS.attr('date'),
  lastActivityDate: DS.attr('date'),
  score:            DS.attr('number'),
  answerCount:      DS.attr('number'),
  title:            DS.attr('string'),
  viewCount:        DS.attr('number'),
  link:             DS.attr('string'),
  isAnswered:       DS.attr('boolean')
});