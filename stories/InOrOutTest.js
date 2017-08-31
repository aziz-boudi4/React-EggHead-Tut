import React from 'react';


const OutDivStyle = {
  width:300,
  height:200,
  backgroundColor:"#343458"
};

const InDivStyle = {
  width:300,
  height:200,
  backgroundColor:"#343458"
};

class InOrOut extends React.Component {

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
				<div>{this.props.children[1]}</div>
			);
		} else if (this.state.buttonDropPressed){
			renderContent = (
				<div>{this.props.children[0]}</div>
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


export default InOrOut;