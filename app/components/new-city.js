import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    formShow() {
      this.set('addNewCity', true);
    },

    hideForm() {
      this.set('addNewCity', false);
    },

    saveUser() {
      var params = {
        name: this.get('user'),
        authlevel: 1
      };
      this.set('addNewCity', false);
      this.sendAction('saveUser', params);
    }
  }
});
