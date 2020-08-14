import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-yyyyy7773-dsss2-l');
  this.route('i-i-s-yyyyy7773-dsss2-e',
  { path: 'i-i-s-yyyyy7773-dsss2-e/:id' });
  this.route('i-i-s-yyyyy7773-dsss2-e.new',
  { path: 'i-i-s-yyyyy7773-dsss2-e/new' });
});

export default Router;
