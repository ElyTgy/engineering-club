import Countdown from "./Components/Countdown"
import TextBox from "./Components/TextBox"
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
//fetch the time for meeting countdown from a DB. The time will be set in the DB using a discord bot

export default function(props){
    return (
        <div>
            <Navbar className="bg-green-50"/>
            <div className="bg-green-50 h-[90vh] flex items-center text-center justify-center">
                <div className="flex flex-col items-center w-full">
                    <h1 className="title-text text-[65px] sm:title-text md:mb-4 lg:mb-10">
                        <span>HSS</span><span className="block lg:inline"> Engineering</span><span> Club</span>
                    </h1>
                    <div className="w-full lg:w-11/12 xl:w-3/4 flex flex-col items-center">
                        <Countdown meetingTime={[2022, 1, 11, 16, 30, 0]}/>
                        <h4 className="title-text text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold md:mt-3">until the next meeting</h4>
                    </div>
                </div>
            </div>
            <div className="bg-black py-5">
                <TextBox className="my-3 mb-10" title="What Is Engineering Club?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBox>
                <TextBox className="my-3" title="What Is Engineering Club?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </TextBox>
            </div>
            <Footer className="bg-blue-600"/>
        </div>
    )
}