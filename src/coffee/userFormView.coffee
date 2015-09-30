React = require('react')
toastr = require('toastr')
FormGroupView = require('./formGroupView')
FormCheckboxView = require('./formCheckboxView')
FormButton = require('./formButton')
FormSerializer = require('./formSerializer')

# tag factories
div = React.createFactory('div')
form = React.createFactory('form')

# View Class
userFormView = React.createClass
    #################################
    #       User Functions
    #################################
    show_toast: (first, last) ->
        full_name = first + ' ' + last

        toastr.success('Thanks for submitting!', 'Hey ' + full_name + '!')

    submit: ->
        formSerializer = new FormSerializer()
        data = formSerializer.serialize()

        @show_toast(data['first-name'], data['last-name'])

    #################################
    #       React Functions
    #################################
    render: ->
        form
            role: 'form'

            # First Name input
            FormGroupView
                id: 'first-name'
                innerText: 'First Name:'
                type: 'text'

            # Last Name input
            FormGroupView
                id: 'last-name'
                innerText: 'Last Name:'
                type: 'text'

            FormGroupView
                id: 'email'
                innerText: 'Email Address:'
                type: 'email'

            FormCheckboxView
                id: 'taco-box'
                innerText: 'Do you want tacos?'

            FormButton
                id: 'submit-button'
                innerText: 'Submit'
                onClick: @submit

module.exports = React.createFactory(userFormView)