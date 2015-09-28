(function() {
  var React, button, formCheckboxView;

  React = require('react');

  button = React.createFactory('button');

  formCheckboxView = React.createClass({
    render: function() {
      return button({
        id: this.props.id,
        className: 'btn btn-default',
        type: 'button',
        onClick: this.props.onClick
      }, this.props.innerText);
    }
  });

  module.exports = React.createFactory(formCheckboxView);

}).call(this);
