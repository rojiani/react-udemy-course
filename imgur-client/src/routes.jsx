var React          = require('react');
var ReactDOM       = require('react-dom');
var ReactRouter    = require('react-router');
var Router         = ReactRouter.Router;
var Route          = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;

var Main           = require('./components/main');
var Topic          = require('./components/topic');
var ImageDetail    = require('./components/image-detail');

module.exports = (
  <Router history={BrowserHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
    </Route>
  </Router>
);
