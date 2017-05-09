import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are the best' color='peru'></MyTitle>
        <MyTitle title='semicolons are the worst' color='mediumaquamarine'></MyTitle>
        <MyTitle title='jklol its okay if you like semicolons' color='blanchedalmond'></MyTitle>
        <MyTitle title='i am out of ideas' color='rebeccapurple'></MyTitle>
      </div>        
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
