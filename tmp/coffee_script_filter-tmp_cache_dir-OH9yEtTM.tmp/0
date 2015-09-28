(function() {
  var React, centeredImageView, div, img;

  React = require('react');

  div = React.createFactory('div');

  img = React.createFactory('img');

  centeredImageView = React.createClass({
    render: function() {
      var IMG_STYLE;
      IMG_STYLE = {
        width: this.props.scale,
        height: 'auto'
      };
      return div({
        className: 'row'
      }, div({
        className: 'span4'
      }), div({
        className: 'span4'
      }, img({
        className: 'center-block',
        src: this.props.src,
        style: IMG_STYLE
      })), div({
        className: 'span4'
      }));
    }
  });

  module.exports = React.createFactory(centeredImageView);

}).call(this);
