import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('context');
  this.route('toasty');
  this.route('battle');
  this.route('rental');
  this.route('brother', {path: '/brother/:brother_id'});
});

export default Router;
