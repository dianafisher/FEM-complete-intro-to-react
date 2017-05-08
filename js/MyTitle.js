import React from 'react'  // now React will be locally injected

var MyTitle = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1({ style: { color: this.props.color, fontWeight: 'bold' } }, this.props.title))
    )
  }
})

export default MyTitle
