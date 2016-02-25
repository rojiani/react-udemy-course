var React    = require('react');
var ReactDOM = require('react-dom');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      topics: []
    }
  },
  componentWillMount: function () {
    // Calling TopicStore.getTopics() makes the TopicStore
    // reach out, fetch our data, and assign it to this.topics
    TopicStore.getTopics()
      .then(function(){
        // We have successfully fetched topics
        // topics are available on TopicStore.topics
        this.setState({
          topics: TopicStore.topics
        });
      }.bind(this));
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
    // Get topics array from state, map to list items containing
    // the topics

    this.state.topics.forEach(function (topic) {
      console.log(topic);
    });
    // return this.state.topics.map(function (topic) {
    //   return (
    //     <li>{topic}</li>
    //   );
    // });
  }
});
