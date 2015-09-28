(function() {
  var React, div, formCheckboxView, input, label;

  React = require('react');

  div = React.createFactory('div');

  label = React.createFactory('label');

  input = React.createFactory('input');

  formCheckboxView = React.createClass({
    render: function() {
      return div({
        className: 'checkbox'
      }, label({
        "for": this.props.id
      }, input({
        type: 'checkbox',
        id: this.props.id
      }, this.props.innerText)));
    }
  });

  module.exports = React.createFactory(formCheckboxView);

}).call(this);
