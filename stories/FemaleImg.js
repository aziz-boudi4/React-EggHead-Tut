import React from 'react';

const FemaleImgStyle = {

};



var FemaleImg = React.createClass({
	render: function(){
		return(
			<div style={{textAlign:"center",width:60, height:60}}>
				<img style={{paddingLeft:4}} src="https://s3-us-west-1.amazonaws.com/jogabocitypages/female-circled-s.png"/>
				<p style={{fontSize:10,marginTop:0}}>{this.props.text}</p>

			</div>
		);
	}
});


export default FemaleImg;



