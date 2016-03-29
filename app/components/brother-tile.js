import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  updateBrotherForm: false,

  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(brother, params) {
      console.log(brother);
      this.sendAction('update', brother, params);
    },
    delete(brother) {
      if (confirm('Are you sure you want to delete this brother?')) {
            this.sendAction('destroyBrother', brother);
      }
    }
  }
});
