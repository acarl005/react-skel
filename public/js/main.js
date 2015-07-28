var React = require('react');

var APP = React.createClass({
  render: function() {
    return <div> hello {this.props.name}</div>;
  }
});

React.render(
  <APP name="world" />,
  document.getElementById('content')
);