import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  studio: DS.hasMany('studio', {async:true}),
  state: DS.belongsTo('state', {async:true})
});
