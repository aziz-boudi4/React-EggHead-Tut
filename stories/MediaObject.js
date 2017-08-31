import React from 'react';

const MediaObjectStyle = {
  borderRadius: 44,
  width:44,
  height:44,
  marginRight: 8,
  float: "left", 
  display : "block"

}, RightText = {
	overFlow: "hidden",
	_overFlow: "visible",
	zoom: 1,
	paddingTop: 3
}

var MediaObject = React.createClass({
	render: function(){
		return(
			<div style={{paddingTop:10}}>
				<a>
				   <img style={MediaObjectStyle}  src ={this.props.image} />
				</a>
				<div style={RightText}>
					{this.props.children}
				</div>
			</div>
		);
	}
});


export default MediaObject;