var React     = require('react');
var ReactDOM  = require('react-dom');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: ''
    }
  },
  handleClick: function () {
    // Send value of text input to Firebase
    console.log(this.state.text);
  },
  handleInputChange: function (event) {
    this.setState({ text: event.target.value });
  },
  render: function () {
    return (
      <div className="input-group">
        <input
          className="form-control"
          onChange={this.handleInputChange}
          type="text"
          value={this.state.text} />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            className="btn btn-default"
            type="button">
            Add
          </button>
        </span>
      </div>
    );
  }
});
