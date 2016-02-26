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
    console.log('topic is about to render & fetch data');
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps: function (nextProps) {
    console.log('componentWillReceiveProps');
    console.log('componentWillReceiveProps: nextProps:', nextProps);
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
      <div>
        I am a topic with ID {this.props.params.id}
      </div>
    );
  },
  onChange: function (event, images) {
    this.setState({images: images});
  }
});
