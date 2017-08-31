import React from 'react';

const MatchImgStyle = {

};



var MatchImg = React.createClass({
	render: function(){
		return(
			<div style={{textAlign:"center",width:60, height:60}}>
	
				<p style={{textAlign:"center",fontSize:10,marginTop:0}}>{this.props.text}</p>
			</div>
		);
	}
});


export default MatchImg;
