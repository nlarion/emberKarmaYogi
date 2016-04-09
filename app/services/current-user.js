import Ember from 'ember';

export default Ember.Service.extend({
  users: [],
  selectUser: true,
  add(user) {
    this.get('users').pushObject(user);
  },
  remove(user) {
    this.get('users').removeObject(user);
  },
  includes(user){
    return this.get('users').includes(user);
  }
});
