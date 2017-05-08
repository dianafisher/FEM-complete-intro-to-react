import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        MyTitleFactory({ title: 'props are the best', color: 'peru' }),
        MyTitleFactory({ title: 'semicolons are the worst', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'jklol its okay if you like semicolons', color: 'blanchedalmond' }),
        MyTitleFactory({ title: 'i am out of ideas', color: 'rebeccapurple' }))
        // React.DOM.h1(null, 'This is my first component!'))
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
