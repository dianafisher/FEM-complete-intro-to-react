import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    // dispatch comes from connect
    // pass the value to our action creator
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input
          value={this.props.searchTerm}
          onChange={this.handleSearchTermChange}
          type='text'
          placeholder='Search' />
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
