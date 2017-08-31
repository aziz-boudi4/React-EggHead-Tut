import React from 'react';

const buttonStyles = {
  border: '2px solid #eee',
  color: "#A7F643",
  borderColor: "#A7F643",
  borderRadius: 4,
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontSize: 16,
  width:240,
  height:40,
  padding: '4px 0px',
  margin: 10,
};

class JoinOurDropOut extends React.Component {

  constructor(props){
		super(props) 
			this.state = {
		      buttonJoinPressed: false,
		      buttonDropPressed: false
			}
	this.buttonJoinPressed = this.buttonJoinPressed.bind(this);
	this.buttonDropPressed = this.buttonDropPressed.bind(this);
  }


  handleJoinClick(evt) {
    this.setState({
      buttonJoinPressed: !this.state.buttonJoinPressed,
    })
  }

  handleDropClick(evt) {
    this.setState({
      buttonDropPressed: !this.state.buttonDropPressed,
    })
  }

	render(){
	let renderContent;

	if (this.state.buttonJoinPressed){
		renderContent = (
			<div>{this.props.children[2]}</div>
		);
	} else if (this.state.buttonDropPressed){
		renderContent = (
			<div>{this.props.children[3]}</div>
		);
	} else {
		renderContent = (
		    <div className="test" style={InvitedDivActionStyle}>
				<div onClick={this.handleYesClick} style={{float:'left'}}>{this.props.children[0]}</div>
		 		<div onClick={this.handleNoClick}  style={{float:"right"}}>{this.props.children[1]}</div>
		    </div>
		);
	}
	return(
		<div>
			{renderContent}
		</div>
	);
}





}




export default JoinOurDropOut;