var React    = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  render: function () {
    return (
      <button className={"btn " + this.props.className} type="button">
      {this.props.title}
      <span className="badge">{this.props.subTitle}</span>
      </button>
    );
  }
});
