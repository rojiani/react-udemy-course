var React     = require('react');
var ReactDOM  = require('react-dom');

module.exports = React.createClass({
  render: function () {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  },
  renderList: function () {
    if (this.props.items && Object.keys(this.props.items).length === 0) {
      return (
        <h4>
          Add a Todo to get started.
        </h4>
      );
    } else {
      var children = [];
      for (var key in this.props.items) {
        children.push(
          <li>
            {this.props.items[key].text}
          </li>
        )
      }

      return children; // React knows how to render an array of stuff
    }
  }
});
