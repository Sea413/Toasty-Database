import Ember from 'ember';

export default Ember.Component.extend({

  updateBrotherForm: false,
  actions: {
    updateBrotherForm() {
      this.set('updateBrotherForm', true);
    },
    update(brother) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        hp: this.get('hp')
      };
      this.set('updateBrotherForm', false);
      this.sendAction('update', brother, params);
    }
  }
});
