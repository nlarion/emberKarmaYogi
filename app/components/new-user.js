import Ember from 'ember';

export default Ember.Component.extend({
  addNewUser: false,
  actions: {
    formShow() {
      this.set('addNewUser', true);
    },

    hideForm() {
      this.set('addNewUser', false);
    },

    saveUser() {
      var params = {
        name: this.get('user'),
        authlevel: 1
      };
      this.set('addNewUser', false);
      this.sendAction('saveUser', params);
    }
  }
});
