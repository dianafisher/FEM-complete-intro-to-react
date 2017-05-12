import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'
import preload from '../public/data.json'
// import '../public/normalize.css'
// import '../public/style.css'

// if we are on Node..
if (global) {
  global.System = { import () {} }
}

// App is a stateless functional component
const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <nav>I will end up on every single page.</nav>
        <Match
          exactly pattern='/'
          component={(props) => <AsyncRoute
            props={props}
            loadingPromise={System.import('./Landing')} />}
        />
        <Match
          pattern='/search'
          component={(props) => <AsyncRoute
            props={Object.assign({shows: preload.shows}, props)}
            loadingPromise={System.import('./Search')} />}
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) =>
            props.params.id === show.imdbID)
              return <AsyncRoute
                props={Object.assign({show: shows[0]}, props)}
                loadingPromise={System.import('./Details')} />
          }}
        />
      </div>
    </Provider>
  )
}

export default App
