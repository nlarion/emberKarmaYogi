import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  city: DS.belongsTo('city', {async:true}),
  user: DS.belongsTo('user', {async:true}),
  review: DS.hasMany('review', {async:true}),
  rating: DS.hasMany('rating', {async:true})
});
