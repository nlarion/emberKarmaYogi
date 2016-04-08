import DS from 'ember-data';

export default DS.Model.extend({
  stars: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  studio: DS.belongsTo('studio', { async: true })
});
