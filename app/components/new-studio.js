import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  currentCity: Ember.inject.service(),
  addNewStudio: false,
  userAndCitySelected: false,
  selectedUserAndCity: Ember.computed('currentUser', 'currentCity', function() {
    var currentCity = this.get('currentCity.selectCity');
    var currentUser = this.get('currentUser.selectUser');
    console.log(currentUser);

  }),
  actions: {
    formShow() {
      this.set('addNewStudio', true);
    },
    hideForm() {
      this.set('addNewStudio', false);
    },

    saveStudio() {
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        user: this.get('currentUser').users.get('firstObject'),
        city: this.get('currentCity').cities.get('firstObject'),
        image: this.get('image') ? this.get('image') : ""
      };
      this.set('addNewStudio', false);
      this.sendAction('saveStudio', params);
    }
  }
});
