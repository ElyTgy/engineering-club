//fetch current local time from the user every second
//convert to UTC
//change to epoch
//get the time of the meeting from props (which is in PDT)
//convert to UTC
//change to epoch
//get difference of the two times

export function getTimeDiff(time1, time2){
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
    return {days:days, hours:hours, minutes:minutes, seconds:seconds};
}