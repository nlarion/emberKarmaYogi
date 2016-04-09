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

    saveCity() {
      var params = {
        name: this.get('city'),
        description: this.get('description')
      };
      this.set('addNewCity', false);
      this.sendAction('saveCity', params);
    }
  }
});
