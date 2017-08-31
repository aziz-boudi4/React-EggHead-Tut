import React from 'react';

const DateAndTimeOfGameStyle = {

};



var DateAndTimeOfGame = React.createClass({
	render: function(){
		return(
			<div style={{width:300, height:55}}>
				<hr style={{border: 0, height: 0, borderTop: "1px solid rgba(0, 0, 0, 0.1)", borderBottom: "1px solid rgba(255, 255, 255, 0.3)"}}/>
				<p  style={{fontSize:18, marginBottom:0, marginTop:0, color:"#343458"}}>{this.props.day} @ {this.props.theTime}</p>
				<p  style={{fontSize:13, marginBottom:0, marginTop:2,color:"#343458"}}>{this.props.date}</p>
			</div>
		);
	}
});


export default DateAndTimeOfGame;