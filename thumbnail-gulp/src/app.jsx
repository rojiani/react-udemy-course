var React         = require('react');
var ReactDOM      = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [
    {
      title       : 'Show Courses',
      number      : '12',
      header      : 'Learn React',
      description : 'React is a fantastic new library for making fast, dynamic web apps. React is a fantastic new library for making fast, dynamic web apps.',
      imageUrl    : 'http://formatjs.io/img/react.svg'
    },
    {
      title       : 'Show Courses',
      number      : '25',
      header      : 'Learn Gulp',
      description : 'Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.',
      imageUrl    : 'http://brunch.io/images/others/gulp.png'
    }
  ]
};

var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.container'));
