import Countdown from "./Components/Countdown"

export default function(props){
    return (
            <div className="bg-green-50 h-screen flex items-center text-center justify-center">
                <div className="flex flex-col items-center w-full">
                    <h1 className="title-text text-[65px] sm:title-text md:mb-4 lg:mb-10">
                        <span>HSS</span><span className="block lg:inline"> Engineering</span><span> Club</span>
                    </h1>
                    <div className="w-full lg:w-11/12 flex flex-col items-center">
                        <Countdown meetingTime={[2022, 1, 11, 16, 30, 0]}/>
                        <h4 className="title-text text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-3">until the next meeting</h4>
                    </div>
                </div>
            </div>
    )
}