import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import backgrounds from "react-storybook-addon-backgrounds";
import Button from './Button';
import ButtonCross from './ButtonCross';
import ButtonWhiteCross from './ButtonWhiteCross';
import ButtonGreenCheckMark from './ButtonGreenCheckMark';
import ButtonWaitlist from './ButtonWaitlist';
import ButtonJoinGame from './ButtonJoinGame';
import ButtonDropOut from './ButtonDropOut';
import MediaObject from './MediaObject';
import Welcome from './Welcome';
import AvatarLink from './AvatarLink';
import GameDescription from './GameDescription';
import InvitedDiv from './InvitedDiv';
import InvitedDivAction from './InvitedDivAction';
import InDiv from './InDiv';
import OutDiv from './OutDiv';
import ButtonChevronUp from './ButtonChevronUp';
import ButtonChevronDown from './ButtonChevronDown';
import GameTypeDetail from './GameTypeDetail';
import MatchImg from './MatchImg';
import CompetitiveImg from './CompetitiveImg';
import FemaleImg from './FemaleImg';
import DateAndTimeOfGame from './DateAndTimeOfGame';
import Bell from './Bell'
import CheckMark from './CheckMark'
import Cross from './Cross'
import Match from './Match'



{/*Second solution, add new stories for each other new button*/}

storiesOf('ButtonWhiteCheckMark', module)
  .add('with white checkmark', () => (
    <Button onClick={action('clicked')} />
))    

storiesOf('Bell', module)
  .add('Bell', () => (
    <Bell width={44} height={44} style={{padding:15, fill:"red",border: '2px solid red', borderRadius: 44}} onClick={action('clicked')} />
))  

storiesOf('CheckMark Svg', module)
  .add('CheckMark Svg', () => (
    <CheckMark width={14} height={14} style={{padding:15, fill:"#A7F643",border: '2px solid #A7F643', borderRadius: 44}} onClick={action('clicked')} />
))

storiesOf('Cross Svg', module)
  .add('Cross Svg', () => (
    <Cross width={18} height={18} style={{padding:12, fill:"#FF3333",border: '2px solid #FF3333', borderRadius: 44, transform: "rotate(45deg)"}} onClick={action('clicked')} />
))   

storiesOf('Match Svg', module)
  .add('Match Svg', () => (
    <Match width={34} height={34} style={{padding:12}} onClick={action('clicked')} />
))   




storiesOf('ButtonGreenCheckMark', module)
  .add('with green checkmark', () => (
    <ButtonGreenCheckMark onClick={action('clicked')} />
  ))  




storiesOf('ButtonRedCross', module)
  .add('with Red Cross ', () => (
    <ButtonCross onClick={action('clicked')} />
  ));




storiesOf('ButtonWhiteCross', module)
  .add('with white Cross Red Bgr ', () => (
    <ButtonWhiteCross onClick={action('clicked')} />
));  




storiesOf('ButtonWaitlistTransparent', module)
  .add('with waitlist transparent Bgr', () => (
    <ButtonWaitlist onClick={action('clicked')} />
  ))





storiesOf('ButtonWaitlistWhiteBgr', module)
.addDecorator(backgrounds([
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
.add('with waitlist White background ', () => (
    <ButtonWaitlist onClick={action('clicked')} />
  ))  




storiesOf('ButtonJoinGame', module)
  .add('ButtonJoinGame', () => (
    <ButtonJoinGame onClick={action('clicked')}>JOIN GAME</ButtonJoinGame>
  ))




storiesOf('ButtonDropOut', module)
  .add('ButtonDropOut', () => (
    <ButtonDropOut onClick={action('clicked')}>DROP OUT</ButtonDropOut>
  )) 





storiesOf('MediaObject', module)
  .add('MediaObject', () => (
    <MediaObject
    	image="https://s3-us-west-1.amazonaws.com/jogabocitypages/writerAvatar.jpg">
    	Test Avatar
    	<AvatarLink >@AvatarLink</AvatarLink>
    </MediaObject>
  )) 





storiesOf('AvatarLink', module)
  .add('AvatarLink', () => (
    <AvatarLink>@AvatarLink</AvatarLink>
  ))          





storiesOf('GameDescription', module)
  .add('GameDescription', () => (
    <GameDescription>Come during your lunch break and bring some co-workers with you! we have a good comunity and play self-organized pick up soccer at the street soccer usa park</GameDescription>
  ))   





storiesOf('GameDescription + MediaObject', module)
  .add('GameDescription + MediaObject', () => (
  <div style={{width:300}}>	
  	<MediaObject
    	image="https://s3-us-west-1.amazonaws.com/jogabocitypages/writerAvatar.jpg">
    	Test Avatar
    	<AvatarLink >@AvatarLink</AvatarLink>
    </MediaObject>
    <GameDescription style={{paddingTop:30}}>Come during your lunch break and bring some co-workers with you! we have a good comunity and play self-organized pick up soccer at the street soccer usa park</GameDescription>
  </div>	
  ))   




storiesOf('InvitedDiv', module)
  .add('InvitedDiv', () => (
    <InvitedDiv>
      <Cross width={15} height={15} style={{padding:12, fill:"#FF3333",border: '2px solid #FF3333', borderRadius: 44, transform: "rotate(45deg)"}} onClick={action('clicked')} />
      <CheckMark width={15} height={15} style={{padding:12, fill:"#A7F643",border: '2px solid #A7F643', borderRadius: 44}} onClick={action('clicked')} />
    </InvitedDiv>
  )) 




storiesOf('InvitedDivAction', module)
  .add('InvitedDivAction', () => (
  <div>	
    <InvitedDivAction>
      <Cross width={15} height={15} style={{padding:12, fill:"#FF3333",border: '2px solid #FF3333', borderRadius: 44, transform: "rotate(45deg)"}} onClick={action('clicked')} />
      <CheckMark width={15} height={15} style={{padding:12, fill:"#A7F643",border: '2px solid #A7F643', borderRadius: 44}} onClick={action('clicked')} />
    	<OutDiv>
    		<ButtonWhiteCross onClick={action('clicked')} />
   		 	<p>OUT</p>
   		 	<ButtonChevronUp onClick={action('clicked')} />
   		 	<p>CHANGED YOUR MIND?</p>
    	 	<ButtonJoinGame onClick={action('clicked')}>JOIN GAME</ButtonJoinGame>
    	</OutDiv>
    	<InDiv>
   			<Button onClick={action('clicked')} />
   		 	<p>IN</p>
   		 	<ButtonChevronUp onClick={action('clicked')} />
   		 	<p>DON T WANT TO PLAY ANY MORE?</p>
   		 	<ButtonDropOut onClick={action('clicked')}>DROP OUT</ButtonDropOut>
    	</InDiv>
    </InvitedDivAction>
  </div>  
  ))  





storiesOf('InvitedDivAction + All Componnents', module)
  .add('InvitedDiv + GameDescription', () => (
	<div style={{padding:30}}>
	  <div style={{width:300}}>
	  <DateAndTimeOfGame  day='Monday' theTime='12:00PM' date="October 19, 2016" />	
	  <GameTypeDetail>
    	 <MatchImg text='MATCH' />
    	 <FemaleImg text="FEMALE"/>
    	 <CompetitiveImg text="ALL LEVELS" />
      </GameTypeDetail>
	  
	    <div style={{ height:13,backgroundColor:'#e7e7ea'}}></div>
	  	<MediaObject
	    	image="https://s3-us-west-1.amazonaws.com/jogabocitypages/writerAvatar.jpg">
	    	Test Avatar
	    	<AvatarLink >@AvatarLink</AvatarLink>
	    </MediaObject>
	    <GameDescription style={{paddingTop:30}}>Come during your lunch break and bring some co-workers with you! we have a good comunity and play self-organized pick up soccer at the street soccer USA park. We play and grab n go lunch specials at the vendors next door, so you can get your soccer and lunch together</GameDescription>
	  </div>
	  
    <InvitedDivAction>
      <Cross width={15} height={15} style={{padding:12, fill:"#FF3333",border: '2px solid #FF3333', borderRadius: 44, transform: "rotate(45deg)"}} onClick={action('clicked')} />
      <CheckMark width={15} height={15} style={{padding:12, fill:"#A7F643",border: '2px solid #A7F643', borderRadius: 44}} onClick={action('clicked')} />
    	<OutDiv>
    		<ButtonWhiteCross />
   		 	<p>OUT</p>
   		 	<ButtonChevronUp onClick={action('clicked')} />
   		 	<p>CHANGED YOUR MIND?</p>
    	 	<ButtonJoinGame onClick={action('clicked')}>JOIN GAME</ButtonJoinGame>
    	</OutDiv>
    	<InDiv>
   			<Button />
   		 	<p>IN</p>
   		 	<ButtonChevronUp onClick={action('clicked')} />
   		 	<p>DON T WANT TO PLAY ANY MORE?</p>
   		 	<ButtonDropOut onClick={action('clicked')}>DROP OUT</ButtonDropOut>
    	</InDiv>
    </InvitedDivAction>
	</div>    
  ))  






storiesOf('InDiv', module)
  .add('InDiv', () => (
    <InDiv>
       <CheckMark width={18} height={18} style={{padding:12, fill:"white", borderRadius: 44, backgroundColor:"#A7F643"}} onClick={action('clicked')} />
   		 <p>IN</p>
   		 <ButtonChevronUp onClick={action('clicked')} />
   		 <p>DON T WANT TO PLAY ANY MORE?</p>
   		 <ButtonDropOut onClick={action('clicked')}>DROP OUT</ButtonDropOut>
    </InDiv>
  ))  





storiesOf('OutDiv', module)
  .add('OutDiv', () => (
    <OutDiv>
       <Cross width={18} height={18} style={{padding:12, fill:"white",border: '2px solid #FF3333', backgroundColor:"#FF3333", borderRadius: 44, transform: "rotate(45deg)"}} onClick={action('clicked')} />
   		 <p>OUT</p>
   		 <ButtonChevronUp onClick={action('clicked')} />
   		 <p>CHANGED YOUR MIND?</p>
    	 <ButtonJoinGame onClick={action('clicked')}>JOIN GAME</ButtonJoinGame>
    </OutDiv>
  )) 

  


  storiesOf('MatchImg', module)
  .add('MatchImg', () => (
        <Match  width={34} height={34} style={{padding:12}} onClick={action('clicked')}  />

  )) 

  


  storiesOf('FemaleImg', module)
  .add('FemaleImg', () => (
    <FemaleImg text="FEMALE" />
  ))  

  


  storiesOf('CompetitiveImg', module)
  .add('CompetitiveImg', () => (
    <CompetitiveImg text="ALL LEVELS" />
  )) 

  

  storiesOf('GameTypeDetail', module)
  .add('GameTypeDetail', () => (
    <GameTypeDetail>
    	 <MatchImg text='MATCH' />
    	 <FemaleImg text="FEMALE"/>
    	 <CompetitiveImg text="ALL LEVELS" />
    </GameTypeDetail>
  )) 

  

  storiesOf('DateAndTimeOfGame', module)
  .add('DateAndTimeOfGame', () => (
    <DateAndTimeOfGame  day='Monday' theTime='12:00PM' date="October 19, 2016" />
  )) 




  
