import './hover.css'
import Button1 from "./Components/Button1"
import {FaDiscord} from 'react-icons/fa';
import {SiMicrosoftteams} from 'react-icons/si';
import Canvas from "./Components/Particle/wireframe"
import "./svgs.css"
import Arrow from "./Components/ScrollDownArrow"

export default function Join(props){
    return ( 
        <div>
            <div id="join" className="relative">
                <div className="bg-white text-black h-[90vh] flex flex-col items-center text-center justify-center">
                    {/*<Canvas/>*/}
                    <div className="flex flex-col items-center w-full">
                        <h1 className="hover before:bg-teal-300 title-text mb-10 md:mb-16 lg:mb-20 leading-tight">
                            Join the Club!
                        </h1>
                        <div className="flex flex-col md:flex-row justify-center">
                            <Button1 text="Join on Discord" href="https://discord.gg/SPtN2T7q" icon={<FaDiscord className="w-6 h-6 mx-3"/>}/>
                            <Button1 text="Join on Teams" href="https://example.com" icon={<SiMicrosoftteams className="w-6 h-6 mx-3"/>}/>
                        </div>
                    </div>
                    <div class="custom-shape-divider-bottom-1644785508">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <Arrow href="#what-should-i-do-for-the-first-meeting"/>
                </div>
            </div>
            <div id="what-should-i-do-for-the-first-meeting" className="text-white py-14 px-4 sm:py-16 sm:px-12 md:py-20 md:px-16">
                <h1 className="text-cyan-500 mb-8 text-center subheading-text text-xl sm:text-2xl md:text-3xl">What should I do for the first meeting?</h1>
                <ol className="m-auto max-w-5xl">
                    <li class="numbered-list-item">
                        <h2 class="subheading-text">Join Discord or Teams</h2>
                        <p className="body-text">The first step is to <a href="" className="text-cyan-500 underline">join our Discord server</a>! Disocrd is the main platform we use for communication and the community interacts over there. Those who don't have access to Discord can also join us Teams, where we only annouce major updates or deadlines. After joining the Discord introduce yourself and check out some of the channels.</p>
                    </li>
                    <li class="numbered-list-item">
                        <h2 class="subheading-text">Come to Your First Meeting</h2>
                        <p className="body-text">Meetings are <i>usually</i> held every <span className="text-cyan-500">Friday after school for 1 - 2 hours in room 1117</span>. However, these times are <span className="text-cyan-500">subject to change</span>. Make sure to always check our <a href="/" className="underline text-cyan-500">website's home page</a> for information about the next meetings</p>
                    </li>
                    <li class="numbered-list-item">
                        <h2 class="subheading-text">Take the Safety Quiz (if you want)</h2>
                        <p className="body-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</p>
                    </li>
                </ol>
            </div>
            <div id="is-the-club-online-or-in-person" className="text-black bg-white py-14 px-4 sm:py-16 sm:px-12 md:py-20 md:px-16">
                <h1 className="text-cyan-500 mb-8 text-center subheading-text text-xl sm:text-2xl md:text-3xll">Is the Club Online or In-Person?</h1>
                <div className="mb-10 body-text-2 px-6 max-w-5xl m-auto">The club is held in-perso</div>
                <div className=" grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none gap-10">
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the school map with the workshop"/>
                </div>
                <img/>
            </div>
        </div>
    )
}

//bg-gradient-to-r from-green-300 via-blue-500 to-purple-600