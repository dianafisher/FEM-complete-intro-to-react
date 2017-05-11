import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

class Header extends React.Component {

  constructor (props) {
    super(props)  // must pass the props up to React.Component

    /*
    In React components declared as ES6 classes, methods follow
    the same semantics as regular ES6 classes.
    This means that they don't automatically bind this to the instance.
    You'll have to explicitly use .bind(this) in the constructor.
    */

    // bind our method since ES6 does not autobind our methods for us.
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        value={this.props.searchTerm}
        onChange={this.handleSearchTermChange}
        type='text'
        placeholder='Search'
                  />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1 onChange={this.someMethod}>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

// Want these on the static prototype rather than on the instance.
const { func, bool, string } = React.PropTypes
Header.propTypes = {
  showSearch: bool,
  searchTerm: string,
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
