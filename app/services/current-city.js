import Ember from 'ember';

export default Ember.Service.extend({
  cities: [],
  selectCity: true,
  add(city) {
    this.get('cities').pushObject(city);
  },
  remove(city) {
    this.get('cities').removeObject(city);
  },
  includes(city){
    return this.get('cities').includes(city);
  }
});
