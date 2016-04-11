import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('studio', params.studio_id);
  },
  actions: {
    updater(studio, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          studio.set(key,params[key]);
        }
      });
      studio.save();
      this.transitionTo('index');
    }
  }
});
