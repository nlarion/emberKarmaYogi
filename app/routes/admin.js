import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      studios: this.store.findAll('studio'),
      users: this.store.findAll('user'),
      cities: this.store.findAll('city')
    });
  },
  actions: {
    saveStudio(params){
      var newStudio = this.store.createRecord('studio', params);
      var user = params.user;
      var city = params.city;
      console.log(user.get('studios'));
      user.get('studios').addObject(newStudio);
      city.get('studios').addObject(newStudio);
      newStudio.save().then(function(){
        return user.save().then(function(){
          return city.save();
        });
      });
      this.transitionTo('admin');
    },
    saveUser(params){
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('admin');
    },
    saveCity(params){
      var newCity = this.store.createRecord('city', params);
      newCity.save();
      this.transitionTo('admin');
    },

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
