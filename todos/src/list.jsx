var React     = require('react');
var ReactDOM  = require('react-dom');
var ListItem  = require('./list-item');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  },
  renderList: function () {
    if (!this.props.items) {
      return (
        <h4>
          Add a Todo to get started.
        </h4>
      );
    } else {
      var children = [];
      for (var key in this.props.items) {
        var item = this.props.items[key];
        item.key = key;
        children.push(
          <ListItem
            item={item}
            key={key}
          />
        )
      }

      return children; // React knows how to render an array of stuff
    }
  }
});
