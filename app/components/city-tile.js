import Ember from 'ember';

export default Ember.Component.extend({
  currentCity: Ember.inject.service(),
  actions: {
    selectCity(city) {
      this.get('currentCity').add(city),
      this.set('currentCity.selectCity', false);
    }
  }
});
