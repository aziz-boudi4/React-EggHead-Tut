var React = require('react');

var Sibling = React.createClass({
  render: function () {
  		// it receives a name from the parent
  		// and dispalay it in the h1.name
	  var name = this.props.name
    return (
      <div>
        <h1>Hey, my name is <span style={{color:"blue"}}>{name}</span>!</h1>
        <h2>Don t you think <span style={{color:"blue"}}>{name}</span> is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked <span style={{color:"blue"}}>{name}</span>!</h2>
      </div>
    );
  }
});

module.exports = Sibling;