import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
// import '../public/normalize.css'
// import '../public/style.css'

// App is a stateless functional component
const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <nav>I will end up on every single page.</nav>
        <Match exactly pattern='/' component={Landing} />
        <Match
          pattern='/search'
          component={(props) => <Search shows={preload.shows} {...props} />}
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) =>
            props.params.id === show.imdbID)
              return <Details show={shows[0]} {...props} />
          }}
        />
      </div>
    </Provider>
  )
}

export default App
