import { useState, useEffect } from "react"


function CountdownBox(props)
{
    return(
        <span className={`
                        w-[3.25rem] h-[3.25rem] sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-28 lg:h-28
                        flex flex-col justify-center items-center align-center
                        border-2 ${props.className?props.className : ""}`}
        >
            <span className="title-text text-lg sm:text-2xl md:text-4xl lg:text-5xl md:mb-1">{props.number}</span>
            <span className="title-text text-[0.5rem] sm:text-xs font-normal md:text-sm lg:text-base">{props.title}</span>
        </span>
    )
}

export default function Countdown(props){
    let date = new Date(Date.now());
    const [timeLeft, setTimeLeft] = useState([date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()])
    const [currentTime, setCurrentTime] = useState([date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()])
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            let date = new Date(Date.now());
            setCurrentTime([date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()]);
        }, 1000);
        return () => clearInterval(interval);
    }, [])
    
    useEffect(()=>{       
        setTimeLeft(getTimeDiff(currentTime, props.meetingTime));
    }, [props, currentTime])

    function getTimeDiff(time1, time2){
        time1 = Date.UTC(...time1)
        time2 = Date.UTC(...time2)
        let diff = Math.abs(time1 - time2)
        let diffInSeconds = diff / 1000
        let days = (diffInSeconds / (24*60*60)) | 0;
        diffInSeconds = diffInSeconds-(24*60*60*days);
        let hours = diffInSeconds / (60*60)|0;
        diffInSeconds = diffInSeconds-(60*60*hours);
        let minutes = (diffInSeconds / 60)|0;
        let seconds = diffInSeconds - (minutes*60)
        return [days, hours, minutes, seconds]
    }

    return(
        <div className={`flex flex-row justify-between w-3/4 my-51 md:max-w-3xl ${props.countdownClass ? props.countdownClass : ""}`}>
            <CountdownBox className={props.boxClass ? props.boxClass : ""} number={timeLeft[0]} title="days"/>
            <CountdownBox className={props.boxClass ? props.boxClass : ""} number={timeLeft[1]} title="hours"/>
            <CountdownBox className={props.boxClass ? props.boxClass : ""} number={timeLeft[2]} title="minutes"/>
            <CountdownBox className={props.boxClass ? props.boxClass : ""} number={timeLeft[3]} title="seconds"/>
        </div>
    )
}