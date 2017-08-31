import React from 'react';


const GameTypeDetailStyle = {
  width:300,
  height:60,
  backgroundColor:"white"
};



var GameTypeDetail = React.createClass({
	render: function(){
		return(
		<div style={GameTypeDetailStyle}>
				<hr style={{ border: 0, height: 0, borderTop: "1px solid rgba(0, 0, 0, 0.1)", borderBottom: "1px solid rgba(255, 255, 255, 0.3)"}}/>
				<div style={{float:'left',marginRight:25}}>{this.props.children[0]}</div>
				<div style={{float:"left", marginRight:25}}>{this.props.children[1]}</div>
				<div style={{float:"left", marginRight:25}}>{this.props.children[2]}</div>
		</div>	


		);
	}
});







export default GameTypeDetail;