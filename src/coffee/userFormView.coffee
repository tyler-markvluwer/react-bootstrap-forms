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

    submit: ->
        

    #################################
    #       React Functions
    #################################
    componentDidMount: ->

    update: ->

    render: ->


module.exports = React.createFactory(userFormView)