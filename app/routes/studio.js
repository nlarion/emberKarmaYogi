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
    },
    saveRating(params){
      var newRating = this.store.createRecord('rating', params);
      var user = params.user;
      var studio = params.studio;
      user.get('ratings').addObject(newRating);
      studio.get('ratings').addObject(newRating);
      newRating.save().then(function(){
        return user.save().then(function(){
          return studio.save();
        });
      });


      this.transitionTo('index');
    }
  }
});
