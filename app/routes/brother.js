import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('brother', params.brother_id);
  },
  actions: {
    update(brother, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          brother.set(key,params[key]);
        }
      });
      brother.save();
      this.transitionTo('index');
    },
    destroyBrother(brother) {
      brother.destroyRecord();
      this.transitionTo('index');
    }
  }
});
