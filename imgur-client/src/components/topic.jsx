var React        = require('react');
var ReactDOM     = require('react-dom');
var Reflux       = require('reflux');
var Actions      = require('../actions');
var ImageStore   = require('../stores/image-store');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  componentWillMount: function () {
    // console.log('topic is about to render & fetch data');
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function (nextProps) {
    // console.log('componentWillReceiveProps');
    // console.log('componentWillReceiveProps: nextProps:', nextProps);
    Actions.getImages(nextProps.params.id);
  },
  getInitialState: function () {
    return {
      images: []
    }
  },
  render: function () {
    // console.log('topic is rendering with ID', this.props.params.id);
    // console.log('I have this many images', this.state.images.length);
    return (
      <div className="topic">
        {this.renderImages()}
      </div>
    );
  },
  renderImages: function () {
    return this.state.images.slice(0, 20).map(function (image) {
      return (
        <ImagePreview key={image.id} {...image} />
      );
    });
  },
  onChange: function (event, images) {
    this.setState({images: images});
  }
});
