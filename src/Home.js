import Countdown from "./Components/Countdown"
import TextBox from "./Components/TextBox"
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Canvas from "./Components/Particle/wireframe"

//Fetch the time for meeting countdown from a DB. The time will be set in the DB using a discord bot
//Get information for online/in-preson meeting from DB, which can be updated from discord and dissplay in "until meeting"


export default function(props){
    return (
        <div>
            <Navbar className="bg-white text-black"/>
            <div className="bg-white text-black h-[95vh] flex items-center text-center justify-center">
                <Canvas/>
                <div className="flex flex-col items-center w-full">
                    <h1 className="title-text text-[65px] sm:title-text mb-10 md:mb-16 lg:mb-20 leading-tight">
                        <span>HSS</span><span className="block lg:inline"> Engineering</span><span> Club</span>
                    </h1>
                    <div className="w-full lg:w-11/12 xl:w-3/4 flex flex-col items-center">
                        <Countdown boxClass="bg-white text-black rounded-md border-black" meetingTime={[2022, 1, 11, 16, 30, 0]}/>
                        <h4 className="text-black title-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-3 md:mt-5">until the next meeting</h4>
                    </div>
                </div>
            </div>
            <div className="bg-black py-5">
                <TextBox className="my-3 mb-10" title="What Is HSS Engineering Club?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBox>
                <TextBox className="my-3" title="Cool! How Can I Join?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBox>
            </div>
            <Footer className="bg-blue-600"/>
        </div>
    )
}