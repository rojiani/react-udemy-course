var React    = require('react');
var ReactDOM = require('react-dom');

// var Badge = React.createClass({
module.exports = React.createClass({
  render: function () {
    return (
      <button className="btn btn-primary" type="button">
      {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
    );
  }
});

// module.exports = function () {
//   return Badge;
// }
