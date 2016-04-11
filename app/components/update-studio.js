import Ember from 'ember';

export default Ember.Component.extend({
  updateStudioForm: false,
  actions: {
    updateStudioForm() {
      this.set('updateStudioForm', true);
    },
    hideForm() {
      this.set('updateStudioForm', false);
    },
    updater(studio) {
      var params = {
        name: this.get('name') ? this.get('name') : "",
        description: this.get('description') ? this.get('description') : "",
        image: this.get('image') ? this.get('image') : ""
      };
      this.set('updateStudioForm', false);
      this.sendAction('updater', studio, params);
    }
  }
});
