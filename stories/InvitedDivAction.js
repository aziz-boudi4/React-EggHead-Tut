import React from 'react';


const InvitedDivActionStyle = {
  width:300,
  height:60,
  backgroundColor:"#343458"
};

class InvitedDivAction extends React.Component {

  constructor(props){
		super(props) 
			this.state = {
		      buttonYesPressed: false,
		      buttonNoPressed: false
			}
	this.handleYesClick = this.handleYesClick.bind(this);
	this.handleNoClick = this.handleNoClick.bind(this);
  }


  handleYesClick(evt) {
    this.setState({
      buttonYesPressed: !this.state.buttonYesPressed,
    })
  }

  handleNoClick(evt) {
    this.setState({
      buttonNoPressed: !this.state.buttonNoPressed,
    })
  }
 

	render(){
		let renderContent;

		if (this.state.buttonYesPressed){
			renderContent = (
				<div>{this.props.children[2]}</div>
			);
		} else if (this.state.buttonNoPressed){
			renderContent = (
				<div>{this.props.children[3]}</div>
			);
		} else {
			renderContent = (
			    <div className="test" style={InvitedDivActionStyle}>
					<div onClick={this.handleYesClick} style={{float:'left', padding: 8}}>{this.props.children[0]}</div>
			 		<div onClick={this.handleNoClick}  style={{float:"right", padding: 8}}>{this.props.children[1]}</div>
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



export default InvitedDivAction;