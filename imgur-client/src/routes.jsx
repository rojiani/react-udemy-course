var React       = require('react');
var ReactDOM    = require('react-dom');
var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;

var Main        = require('./components/main');
var Topic       = require('./components/topic');
//var History = require('history');
var BrowserHistory = ReactRouter.browserHistory;

module.exports = (
  <Router history={BrowserHistory}>
    <Route path="/" component={Main}>
      <Route path="topics/:id" component={Topic} />
    </Route>
  </Router>
);
