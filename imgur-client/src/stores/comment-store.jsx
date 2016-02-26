var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImage: function () {
    // Which image to get the comments for
    Api.get('gallery/' + id + '/comments')
      .then( json => {
        this.comment = json.data;
        console.log('comment:', this.comment);
        this.triggerChange();
      });
  },
  triggerChange: function () {
    this.trigger('change', this.comment);
  }
});
