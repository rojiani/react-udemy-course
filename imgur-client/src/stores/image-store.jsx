var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImages: function (topicId) {
    Api.get('topics/' + topicId)
      .then( json => {
        this.images = _.reject(json.data, function (image) {
          return image.is_album
        });

        this.triggerChange();
      });
  },
  getImage: function (id) {
    Api.get('gallery/image/' + id)
      .then( json => {
        if (this.images) {
          this.images.push(json.data);
        } else {
          this.images = [json.data];
        }

        this.triggerChange();
      });
  },
  find: function (id) {
    var image = _.find(this.images, {id: id});

    if (image) {
      return image
    } else {
      this.getImage(id);
      return null
    }
  },
  triggerChange: function () {
    this.trigger('change', this.images);
  }
});
