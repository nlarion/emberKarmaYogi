import Ember from 'ember';
export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    selectUser(user) {
      this.get('currentUser').add(user),
      this.set('currentUser.selectUser', false);
    }
  }
});
