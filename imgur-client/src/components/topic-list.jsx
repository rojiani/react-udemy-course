var React       = require('react');
var ReactDOM    = require('react-dom');
var Reflux      = require('reflux');
var ReactRouter = require('react-router');
var Actions     = require('../actions');
var TopicStore  = require('../stores/topic-store');
var Link        = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function () {
    return {
      topics: []
    }
  },
  componentWillMount: function () {
    Actions.getTopics();
  },
  render: function () {
    return (
      <div className="list-group">
        Topic List
          {this.renderTopics()}
      </div>
    );
  },
  renderTopics: function () {
    this.state.topics.forEach(function (image) {
      console.log(image);
    });
    return this.state.topics.slice(0, 4).map(function (topic) {
      return (
        <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
          <h4>{topic.name}</h4>
          <p>{topic.description}</p>
        </Link>
      );
    });
  },
  onChange: function (event, topics) {
    this.setState({ topics: topics });
  }
});
