//import TeamsIcon from '../svgs/microsoftTeamsIcon'
import React from 'react'
import {FaDiscord, FaInstagram, FaYoutube} from 'react-icons/fa';
import {SiMicrosoftteams} from 'react-icons/si';


export default function Footer(props)
{
    return(
        <div className={`w-screen h-[100px] p-10 flex ${!props.className ? "" : props.className}`}>
            <div className="flex flex-col w-1/2 items-center justify-center subheading-text text-xs">
                <a href="mailto:ytaghavi@yahoo.com">Email Ellie (Leader)</a>
                <a href="mailto:ytaghavi@yahoo.com">Email Spencer (Leader)</a>
            </div>
            <div className="flex flex-row w-1/2 items-center justify-center">
                <a href="https://example.com"><FaDiscord className="w-6 h-6 mx-2"/></a>
                <a href="https://example.com"><FaInstagram className="w-6 h-6 mx-2"/></a>
                <a href="https://example.com"><FaYoutube className="w-6 h-6 mx-2"/></a>
                <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-2"/></a>
            </div>
        </div>
    )
}