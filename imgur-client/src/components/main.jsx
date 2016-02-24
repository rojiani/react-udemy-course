var React       = require('react');
var ReactDOM    = require('react-dom');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        I am a header
        {this.props.children}
      </div>
    );
  }
});
