//import TeamsIcon from '../svgs/microsoftTeamsIcon'
import React from 'react'
import {FaDiscord, FaInstagram, FaYoutube} from 'react-icons/fa';
import {SiMicrosoftteams} from 'react-icons/si';


export default function Footer(props)
{
    return(
        <div className={`w-screen h-[100px] p-2 sm:p-10 flex ${!props.className ? "" : props.className}`}>
            <div className="flex flex-col w-1/2 items-center justify-center subheading-text text-xs">
                <a className="text-[0.7rem] " href="mailto:ytaghavi@yahoo.com">Email Ellie (Leader)</a>
                <a className="text-[0.7rem]" href="mailto:Spencer.gray@shaw.ca">Email Spencer (Leader)</a>
            </div>
            <div className="flex flex-row w-1/2 items-center justify-center">
                <a href="https://discord.gg/SPtN2T7q" target="_blank"><FaDiscord className="w-6 h-6 mx-2"/></a>
                {/*<a href="https://example.com"><FaInstagram className="w-6 h-6 mx-2"/></a>
                <a href="https://example.com"><FaYoutube className="w-6 h-6 mx-2"/></a>*/}
                <a href="/"><SiMicrosoftteams className="w-6 h-6 mx-2"/></a>
            </div>
        </div>
    )
}