var React     = require('react');
var ReactDOM  = require('react-dom');
var rootUrl   = 'https://blinding-heat-4098.firebaseio.com/';

module.exports = React.createClass({
  componentWillMount: function () {
    // Create Firebase reference so we can update an item's "done" property
    // in handleDoneChange
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
  getInitialState: function () {
    return {
      text: this.props.item.text,
      done: this.props.item.done
    }
  },
  handleDoneChange: function (event) {
    var update = {done: event.target.checked}
    this.setState(update);
    this.fb.update(update);
  },
  render: function () {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input
            type="checkbox"
            checked={this.state.done}
            onChange={this.handleDoneChange}
          />
        </span>
        <input type="text"
          className="form-control"
          value={this.state.text}
          />
        <span className="input-group-btn">
          <button className="btn btn-default">
            Delete
          </button>
        </span>
    </div>
    );
  }
});
