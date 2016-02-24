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
          <button
            className="btn btn-primary"
            onClick={this.handleSaveClick}>
            Save
          </button>,
          <button
            className="btn btn-warning"
            onClick={this.handleUndoClick}>
            Undo
          </button>
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
  handleDeleteClick: function () {
    this.fb.remove();
  },
  handleSaveClick: function (event) {
    this.fb.update({text: this.state.text});
    this.setState({textChanged: false});
  },
  handleUndoClick: function () {
    this.setState({
      text: this.props.item.text,
      textChanged: false
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
          disabled={this.state.done}
          className="form-control"
          onChange={this.handleTextChanged}
          value={this.state.text}
          />
        <span className="input-group-btn">
          {this.changesButtons()}
          <button
            className="btn btn-danger"
            onClick={this.handleDeleteClick}>
            Delete
          </button>
        </span>
    </div>
    );
  }
});
