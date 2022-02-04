import Countdown from "./Components/Countdown"

export default function(props){
    return (
        <div>
            <div className="bg-green-50 h-screen flex items-center text-center justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="title-text text-[65px] sm:title-text">
                        <span>HSS</span><span className="block lg:inline"> Engineering</span><span> Club</span>
                    </h1>
                    <div className="w-[100%] flex flex-col items-center mt-3">
                        <Countdown days={2} hours={3} minutes={38}/>
                        <h4>until the next meeting</h4>
                    </div>
                </div>
            </div>
        </div>

    )
}