var React    = require('react');
var ReactDOM = require('react-dom');
var Api      = require('../utils/api');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      topics: []
    }
  },
  componentWillMount: function () {
    Api.get('topics/defaults')
      .then(function (data) {
        this.setState({
          topics: data.data
        })
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
