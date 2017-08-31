// 2 claiming states 

case 1 : "Claiming" && rsvp.game.spots.open > 0 && rsvp.watching == false {
        [- popUpTitle = 'A SPOT JUST OPENED UP !'
         - popUpSubtitle = 'You have 6 minutes before we open this spot to other on the waitlist.'
          ]

          - red Cross on the left
          - green Checkmark on the right 

          [ - hide the Avatar and show black info icon with white bgr instead 
            - Title = 'ARE YOU IN?'
            - subtitle = null ]
}  

case 2:  "Claiming" && rsvp.game.spots.open == 0 && rsvp.watching == false {    
        [- popUpTitle = 'THE LAST SPOT WAS TAKEN'
         - popUpSubtitle = 'The last spot was taken. Be faster next time! We can notify you if a new spot opens up'
        ]

        - red Cross on the left
        - green Checkmark on the right 

        [ - hide the Avatar || info icon and show red Cross icon with white bgr instead 
          - Title = 'GET NOTIFIED?'
          - subtitle = null ]
}