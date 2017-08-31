import React from 'react';

const AvatarLinkStyle = {
	color:"blue",
	fontSize:14
};



var AvatarLink = React.createClass({
	render: function(){
		return(
			<div>
				<a style={AvatarLinkStyle}>
				   {this.props.children}
				</a>
			</div>
		);
	}
});


export default AvatarLink;