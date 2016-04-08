import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  studio: DS.belongsTo('studio', { async: true })
});
