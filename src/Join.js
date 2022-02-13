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
                        <h1 className="hover before:bg-teal-300 title-text text-[65px] sm:title-text mb-10 md:mb-16 lg:mb-20 leading-tight">
                            Join the Club!
                        </h1>
                        <div className="flex flex-col md:flex-row justify-center">
                            <Button1 text="Join on Discord" href="https://example.com" icon={<FaDiscord className="w-6 h-6 mx-3"/>}/>
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
            <div id="what-should-i-do-for-the-first-meeting" className="text-white py-20 px-16">
                <h1 className="text-cyan-500 mb-8 text-center subheading-text text-3xl">What should I do for the first meeting?</h1>
                <ol>
                    <li class="numbered-list-item">
                        <h2 class="subheading-text">Number one</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</span>
                    </li>
                    <li class="numbered-list-item">
                        <h2 class="subheading-text">Number two</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</span>
                    </li>
                    <li class="numbered-list-item">
                        <h2 class="subheading-text">Number three</h2><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, distinctio ad corporis, laboriosam unde provident, architecto tenetur ea odio debitis delectus explicabo eum obcaecati vitae facere iusto laborum consequuntur neque.</span>
                    </li>
                </ol>
            </div>
            <div id="is-the-club-online-or-in-person" className="text-black bg-white py-20 px-16">
                <h1 className="text-cyan-500 mb-8 text-center subheading-text text-3xl">Is the Club Online or In-Person</h1>
                <div className="mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div className=" grid grid-cols-2 gap-10">
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the location of Handsworth"/>
                    <img className="border-sm rounded-md" src="https://source.unsplash.com/collection/483251/" alt="image of the school map with the workshop"/>
                </div>
                <img/>
            </div>
        </div>
    )
}

//bg-gradient-to-r from-green-300 via-blue-500 to-purple-600