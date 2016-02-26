var React       = require('react');
var ReactDOM    = require('react-dom');
var Reflux      = require('reflux');
var Actions     = require('../actions');
var ImageStore  = require('../stores/image-store');


module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  componentWillMount: function () {
    Actions.getImages(this.props.params.id);
  },
  getInitialState: function () {
    return {
      images: []
    }
  },
  render: function () {
    return (
      <div>
        I am a topic with ID {this.props.params.id}
      </div>
    );
  },
  onChange: function (event, images) {
    this.setState({images: images});
  }
});
