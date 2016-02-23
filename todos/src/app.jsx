var React     = require('react');
var ReactDOM  = require('react-dom');
var ReactFire = require('reactfire');   // Bridge between Firebase & React components
var Firebase  = require('firebase');    // Communicate with Firebase data store
var Header    = require('./header');
var rootUrl   = 'https://blinding-heat-4098.firebaseio.com/';


var App = React.createClass({
  mixins: [ ReactFire ], // copies code from this object onto our React component
  componentWillMount: function () {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function () {
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            To-Do List
          </h2>
          <Header itemsStore={this.firebaseRefs.items}/>
        </div>
      </div>
    );
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
