import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  ratings: DS.hasMany('rating', { async: true}),
  reviews: DS.hasMany('review', { async: true}),
  studios: DS.hasMany('studio', { async: true}),
  authlevel: DS.attr()
});
