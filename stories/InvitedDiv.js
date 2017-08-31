import React from 'react';


const InvitedDivStyle = {
  width:300,
  height:60,
  backgroundColor:"#343458"
};

var InvitedDiv = React.createClass({
	render: function(){
		return(
		<div style={InvitedDivStyle}>
				<div style={{float:'left', padding: 8}}>{this.props.children[0]}</div>
				<div style={{float:"right", padding: 8}}>{this.props.children[1]}</div>
		</div>


		);
	}
});






export default InvitedDiv;