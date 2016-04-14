import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  newRating: false,
  actions: {
    showRatingForm(){
      this.set('newRating', true);
    },
    submitRating(){
      var params = {
        star: this.get('star'),
        user: this.get('currentUser').users.get('firstObject'),
        studio: this.get('studio'),
      };
      this.set('newRating', false);
      this.sendAction('saveRating', params);
    }
  }
});
