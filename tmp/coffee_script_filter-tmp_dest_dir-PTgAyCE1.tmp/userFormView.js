(function() {
  var FormButton, FormCheckboxView, FormGroupView, FormSerializer, React, div, form, toastr, userFormView;

  React = require('react');

  toastr = require('toastr');

  FormGroupView = require('./formGroupView');

  FormCheckboxView = require('./formCheckboxView');

  FormButton = require('./formButton');

  FormSerializer = require('./formSerializer');

  div = React.createFactory('div');

  form = React.createFactory('form');

  userFormView = React.createClass({
    show_toast: function(first, last) {
      var full_name;
      full_name = first + ' ' + last;
      return toastr.success('Thanks for submitting!', 'Hey ' + full_name + '!');
    },
    submit: function() {
      var data, formSerializer;
      formSerializer = new FormSerializer();
      data = formSerializer.serialize();
      this.props.model.add_data(data);
      return this.show_toast(data['first-name'], data['last-name']);
    },
    componentDidMount: function() {
      return this.props.model.on('change', this.update);
    },
    update: function() {
      console.log("updating");
      return this.forceUpdate();
    },
    render: function() {
      return form({
        role: 'form'
      }, FormGroupView({
        id: 'first-name',
        innerText: 'First Name:',
        type: 'text'
      }), FormGroupView({
        id: 'last-name',
        innerText: 'Last Name:',
        type: 'text'
      }), FormGroupView({
        id: 'email',
        innerText: 'Email Address:',
        type: 'email'
      }), FormCheckboxView({
        id: 'taco-box',
        innerText: 'Do you like tacos?'
      }), FormButton({
        id: 'submit-button',
        innerText: 'Submit',
        onClick: this.submit
      }));
    }
  });

  module.exports = React.createFactory(userFormView);

}).call(this);
