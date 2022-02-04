import { useState } from "react"

//-----in another component-----
//fetch current local time from the user every second
//convert to UTC
//change to epoch
//get the time of the meeting from props (which is in PDT)
//convert to UTC
//change to epoch
//get difference of the two times
//-----in another component-----


//days, hours, minutes left until the next meeting



function CountdownBox(props)
{
    return(
        <span className="bg-green-400 
                        w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28
                        flex justify-center items-center
                        title-text text-2xl md:text-4xl lg:text-5xl
                        border-2 border-red-500"
        >{props.children}</span>
    )
}

export default function Countdown(props){
    //props: props.year, props.month, props.day, props.hour(24-hour), props.minute  
    return(
        <div className="flex flex-row justify-between w-3/4 my-5">
            <CountdownBox>{props.days}</CountdownBox>
            <CountdownBox>{props.hours}</CountdownBox>
            <CountdownBox>{props.minutes}</CountdownBox>
        </div>
    )
}