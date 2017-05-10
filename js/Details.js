import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>
    )
  }
})

export default Details
