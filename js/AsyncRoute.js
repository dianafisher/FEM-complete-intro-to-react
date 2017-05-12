// AysncRoute is a higher order component
import React from 'react'
const { object } = React.PropTypes

const AsyncRoute = React.createClass({
  propTypes: {
    props: object,
    loadingPromise: object
  },

  getInitialState () {
    return {
      loaded: false
    }
  },

  componentDidMount () {
    console.log('componenetDidMount')
    this.props.loadingPromise.then((module) => {
      // we can now use module
      this.component = module.default
      this.setState({loaded: true})
    })
  },

  render () {
    console.log(this.state.loaded, this.component)
    if (this.state.loaded) {
      return <this.component {...this.props.props} />
    } else {
      // return a loading state
      return <h1>Loading...</h1>
    }
  }
})

export default AsyncRoute
