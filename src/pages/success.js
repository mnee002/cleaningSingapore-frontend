import React from "react";
import {PhoneNumber, Email} from '../utils/const'

function Success() {
    return (
        <>
        <div style={{'justifyContent':'center', 'display':'flex', 'paddingTop':12}}>
            <h2>
                Your booking is successful! We will contact you soon to confirm your booking.
            </h2>
            </div>
            <div style={{'justifyContent':'center', 'display':'flex', 'padding':12, 'textAlign': "center"}}>
            <h2>
                If you wish to make any changes, please WhatsApp us at {PhoneNumber} or email us at {Email}
            </h2>
        </div>
        </>
    )
}

export default Success
