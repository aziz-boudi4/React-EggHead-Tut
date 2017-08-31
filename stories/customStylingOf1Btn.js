
{/*Added the 2 other buttons to the main button with custom appropriate style */}
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

{/*Added the 2 other buttons to the main button with custom appropriate style */}
storiesOf('Button', module)
  .add('with CheckMark', () => (
    <Button onClick={action('clicked')}><img src="https://s3-us-west-1.amazonaws.com/jogabocitypages/check-xs.png"/></Button>
  ))
  .add('custom RedCrossStyles', () => {
    const style = {
      border: '2px solid #eee',
      borderColor: "#FF3333",
      backgroundColor: 'transparent',
    };
    return (
      <Button style={ style }><img src="https://s3-us-west-1.amazonaws.com/jogabocitypages/cross-xs.png"/></Button>
    );
  })
  .add('custom WaitlistStylesTransparent', () => {
    const style = {
      border: '2px solid #eee',
      borderColor: "white",
      padding: '4px 0px',
      backgroundColor: 'transparent',
    };
    return (
      <Button style={ style }><img src="https://s3-us-west-1.amazonaws.com/jogabocitypages/waitlist-s2.png"/></Button>
    );
  })