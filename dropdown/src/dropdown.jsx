var React    = require('react');
var ReactDOM = require('react-dom');
var Button   = require('./button');
var List     = require('./list');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="dropdown">
        <Button className="btn-default" title={this.props.title} subTitleClassName="caret"/>
      </div>
    );
  }
});
