import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return this.store.findAll('brother');
  },
  actions: {
  save3(params) {
    var newBrother = this.store.createRecord('brother', params);
    newBrother.save();
    this.transitionTo('index');
  },
  destroyBrother(brother) {
    brother.destroyRecord();
    this.transitionTo('index');
  },
  update(brother, params) {
    Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            brother.set(key,params[key]);
          }
        });
    brother.save();
    this.transitionTo('index');
  }
}
});
