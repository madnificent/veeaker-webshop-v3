import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('products', function() {
    this.route('beef');
    this.route('pork');
    this.route('chicken');
    this.route('lamb');
    this.route('fish');
    this.route('assorted');
  });
  this.route('news');
  this.route('locations', function() {
    this.route('kind', { path: ":normalized_label" });
  });
  this.route('webshop', function() {
    this.route('product-groups');
  });
});

export default Router;
