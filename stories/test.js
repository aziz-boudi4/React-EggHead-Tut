Can I do something like that ?

        
  const primaryButton = (
    <Button type='icon'>
      {

        switch (props.rsvp.state) {
            case "IN":
              <Checkmark size='extraLarge' color={LayoutConstants.primaryGreen} />
            break;
            case "Out":
              <Cross size='extraLarge' color={LayoutConstants.primaryGreen} />
            break;
            case "Waiting": "I'M WAITLISTED"
              <Waitlist size='extraLarge' color={LayoutConstants.primaryGreen} />
            break;
            default:
              console.log("add pending and claiming");

          }

      }
    </Button>
  }