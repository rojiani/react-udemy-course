var React        = require('react');
var ReactDOM     = require('react-dom');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="image-preview">
        {this.image()}
      </div>
    );
  },
  image: function () {
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg'; // image preview
    return <img src={link} />
  }
});
