var React = require('react');

module.exports = React.createClass({
  render: function () {
    console.log(this.props.comments);
    return (
      <div>
        <pre>
          <code>
            {JSON.stringify(this.props.comments, null, 2)}
          </code>
        </pre>
      </div>
    );
  }
});
