import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({

  getInitialState () {
    return {
      searchTerm: 'I am a random string.'
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },

  render () {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type='text'
            placeholder='Search' />
        </header>
        <div>
          {preload.shows.map((show) => {
            return (
              <ShowCard show={show} key={show.imdbID} />
            )
          })}
        </div>
      </div>
      )
  }
})

export default Search
