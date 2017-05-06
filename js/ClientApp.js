
var MyTitle = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.DOM.h1(null, 'check out this component!'))
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      React.DOM.div(null,
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null))
        // React.DOM.h1(null, 'This is my first component!'))
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
