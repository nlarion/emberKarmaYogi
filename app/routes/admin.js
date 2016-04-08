import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      //studios: this.store.findAll('studio'),
      users: this.store.findAll('user')
    });
  },
  actions: {
    saveStudio(params){
      var newStudio = this.store.createRecord('studio', params);
      var user = params.user;
      user.get('studios').addObject(newStudio);
      newStudio.save().then(function(){
        return user.save();
      });
      this.transitionTo('admin');
    },
    saveUser(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('admin');
    }
  }
});
