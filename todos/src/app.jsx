var React     = require('react');
var ReactDOM  = require('react-dom');
var ReactFire = require('reactfire');   // Bridge between Firebase & React components
var Firebase  = require('firebase');    // Firebase library
var rootUrl   = 'https://blinding-heat-4098.firebaseio.com/';


var App = React.createClass({
  mixins: [ ReactFire ], // copies code from this object onto our React component
  componentWillMount: function () {
    /* Creates a one-way binding from node in your Firebase database to an
       object in this.state of your React component. The name of the object
       stored in this.state is specified using the bindVar variable. */
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
    // this.state.items ==> { }
  },
  render: function () {
    return (
      <h1 className="red">
        Hello, React!
      </h1>
    );
  }
});

var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
