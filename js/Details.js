import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <div className='details'>
        <pre><code>{JSON.stringify(this.props, null, 4)}</code></pre>
      </div>
    )
  }
})

// // stateless functional component
// const Details = (props) => {
//   return <h1>hahahaha {props.params.id}</h1>
// }

export default Details
