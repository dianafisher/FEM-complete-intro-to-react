import React from 'react'  // now React will be locally injected

var MyTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={ style }>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
