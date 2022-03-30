import Countdown from "./Components/Countdown"
import TextBox from "./Components/TextBox"
import Navbar from './Components/Navbar'
import Canvas from "./Components/Particle/wireframe"
import "./svgs.css"

//Fetch the time for meeting countdown from a DB. The time will be set in the DB using a discord bot
//Get information for online/in-preson meeting from DB, which can be updated from discord and dissplay in "until meeting"

export default function(props){
    return (
        <div>
            <div className="relative">
                <div className="bg-white text-black h-[95vh] flex items-center text-center justify-center z-50">
                    {/*Canvas*/}
                    <div className="flex flex-col items-center w-full">
                        <h1 className="title-text text-[65px] sm:title-text mb-10 md:mb-16 lg:mb-20 leading-tight">
                            <span>HSS</span><span className="dynamic-gradient bg-clip-text text-transparent"> Engineering</span><span> Club</span>
                        </h1>
                        <div className="w-full lg:w-11/12 xl:w-3/4 flex flex-col items-center">
                            <Countdown boxClass="bg-white text-black rounded-md border-black" meetingTime={[2022, 3, 8, 15, 15, 0]}/>
                            <h4 className="text-black title-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4 md:mt-6 tracking-wide">
                                until the next meeting on 
                                <div><span className="text-cyan-600">April 8th, at 15:15</span></div> 
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1644308813">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
            <div className="bg-black py-5">
                <TextBox className="bg-white my-3 mb-10 border-white border-2 rounded-md mt-30" titleClass="text-cyan-500" title="What Is HSS Engineering Club?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBox>
                <TextBox className="my-3 bg-white border-white border-2 rounded-md" titleClass="text-cyan-500" title="Cool! How Can I Join?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBox>
            </div>
        </div>
    )
}