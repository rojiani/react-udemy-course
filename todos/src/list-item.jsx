var React     = require('react');
var ReactDOM  = require('react-dom');
var rootUrl   = 'https://blinding-heat-4098.firebaseio.com/';

module.exports = React.createClass({
  componentWillMount: function () {
    // Create Firebase reference so we can update an item's "done" property
    // in handleDoneChange
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key);
  },
  changesButtons: function () {
    if (!this.state.textChanged) {
      return null;
    } else {
      return [
        <span>
          <button className="btn btn-default">Save</button>
          <button className="btn btn-warning">Undo</button>
        </span>
      ]
    }
  },
  getInitialState: function () {
    return {
      done: this.props.item.done,
      text: this.props.item.text,
      textChanged: false
    }
  },
  handleDelete: function (event) {
    this.fb.remove()
  },
  handleDoneChange: function (event) {
    var update = {done: event.target.checked}
    this.setState(update);
    this.fb.update(update);
  },
  handleTextChanged: function (event) {
    this.setState({
      text: event.target.value,
      textChanged: true
    });
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
          onChange={this.handleTextChanged}
          value={this.state.text}
          />
        <span className="input-group-btn">
          {this.changesButtons()}
          <button
            className="btn btn-default"
            onClick={this.handleDelete}>
            Delete
          </button>
        </span>
    </div>
    );
  }
});
