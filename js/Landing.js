import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    // dispatch comes from connect
    // pass the value to our action creator
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    // go to the search page programatically via react router
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            value={this.props.searchTerm}
            onChange={this.handleSearchTermChange}
            type='text'
            placeholder='Search'
          />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

// searchTerm is now a prop available to Landing
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

// Landing is now a redux-connected component
export default connect(mapStateToProps)(Landing)
