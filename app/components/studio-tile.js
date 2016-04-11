import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updater(studio, params) {
      console.log(studio);
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
