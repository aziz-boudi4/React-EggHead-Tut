import React from 'react';

const GameDescriptionStyle = {
	width :300,
	paddingTop:15,
	color:"gray"
};


var GameDescription = React.createClass({
	render: function(){
		return(
			<div style={GameDescriptionStyle}>
				{this.props.children}
			</div>
		);
	}
});




export default GameDescription;