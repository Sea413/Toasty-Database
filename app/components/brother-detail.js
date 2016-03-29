import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(brother) {
      if (confirm('Are you sure you want to delete this brother?')) {
        this.sendAction('destroyBrother', brother);
      }
    }
  }
});
