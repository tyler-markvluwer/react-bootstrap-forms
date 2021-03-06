React = require('react')

div = React.createFactory('div')
img = React.createFactory('img')

# View Class
centeredImageView = React.createClass
    #################################
    #       React Functions
    #################################

    render: ->
        IMG_STYLE = {
            width: @props.scale
            height: 'auto'
        }

        div
            className: 'row' # one row in grid...bootstrap thing

            div # empty left block
                className: 'span4'
            div
                className: 'span4'
                img
                    className: 'center-block' # not a bootstrap thing!
                    src: @props.src
                    style: IMG_STYLE
            div # empty right block
                className: 'span4'

module.exports = React.createFactory(centeredImageView)
