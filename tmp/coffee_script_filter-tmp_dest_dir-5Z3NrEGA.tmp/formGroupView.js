(function() {
  var React, div, formGroupView, input, label;

  React = require('react');

  div = React.createFactory('div');

  label = React.createFactory('label');

  input = React.createFactory('input');

  formGroupView = React.createClass({
    render: function() {
      return div({
        className: 'form-group'
      }, label({
        "for": this.props.id
      }, this.props.innerText), input({
        type: this.props.type,
        className: 'form-control',
        id: this.props.id,
        placeholder: "Enter " + this.props.innerText.slice(0, -1) + " Here"
      }));
    }
  });

  module.exports = React.createFactory(formGroupView);

}).call(this);
