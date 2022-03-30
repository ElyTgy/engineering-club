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
                    HSS Engineering Club is Handsworth Secondary's engineering club! The club is held weekly, in the <span className="text-cyan-700">robotics lab (room 1117), after school</span>. We make use of the equipment in the lab to work on awesome projects and collaborate with one another. You are free to make use of the space to work on whatever project you have on mind, or help others with their projects. Occasoinally, we particapte in various engineering competitions, so by being a part of our club you would also have the opportunity to take part in them. <span className="text-cyan-700">No experince</span> is neccessary for joining the club, you will learn all the skills you need during the club meetings.
                </TextBox>
                <TextBox className="my-3 bg-white border-white border-2 rounded-md" titleClass="text-cyan-500" title="Cool! How Can I Join?">
                    You can check out <a className="underline text-cyan-700" href="/join">this page</a> for more info on how to join and the procedures on how to prepare for your first meeting. Also, make sure you join our <span href="https://discord.gg/NcSTWvrNrE" className="underline text-cyan-700">discord</span> to not miss any updates. Can't wait to see you at the next meeting!
                </TextBox>
            </div>
        </div>
    )
}