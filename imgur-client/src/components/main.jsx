var React       = require('react');
var ReactDOM    = require('react-dom');
var Header      = require('./header');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
});
