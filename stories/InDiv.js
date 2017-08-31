import React from 'react';


const InDivStyle = {
  width:300,
  height:200,
  backgroundColor:"#343458"
};


class InDiv extends React.Component {
	render(){
		return(
		<div style={InDivStyle}>
				<div style={{float:'left', padding:10}}>{this.props.children[0]}</div>
				<p style={{float:"left", color:"white",marginTop: "7px"}}>{this.props.children[1]}</p>
				<div style={{float:"right"}}>{this.props.children[2]}</div>
				<p style={{float:"right",color:"darkGray",paddingRight: "46px", marginTop: "0",fontSize:'12px', marginBottom:"0px"}}>{this.props.children[3]}</p>
				<div style={{textAlign:"center"}}>{this.props.children[4]}</div>
		</div>	


		);
	}
};







export default InDiv;