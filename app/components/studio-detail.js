import Ember from 'ember';

export default Ember.Component.extend({
  studioDescription: Ember.computed('studio.name', 'studio.description', function() {
    var name = this.get('studio.name');
    var description = this.get('studio.description');
    return name + " " + description;
  }),
});
