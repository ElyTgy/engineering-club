import './hover.css'
import TextBox from './Components/TextBox';
import Button from "./Components/Button"
import {FaDiscord} from 'react-icons/fa';
import {SiMicrosoftteams} from 'react-icons/si';

export default function Join(props){
    return ( 
        <div>
            <div className="bg-white text-black h-[95vh] flex items-center text-center justify-center">
                {/*<Canvas/>*/}
                <div className="flex flex-col items-center w-full">
                    <h1 className="hover before:bg-teal-300 title-text text-[65px] sm:title-text mb-10 md:mb-16 lg:mb-20 leading-tight">
                        Join the Club!
                    </h1>
                    <div className="flex flex-col md:flex-row justify-center">
                        <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                                className="flex flex-row text-center items-center
                                            lg:w-52 lg:h-14">
                            <a href="https://example.com"><FaDiscord className="w-6 h-6 mx-3"/></a>
                            <span>Join on Discord</span>
                        </Button> 
                        <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                                className="flex flex-row text-center items-center
                                            lg:w-52 lg:h-14">
                            <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-3"/></a>    
                            <span>Join on Teams</span>
                        </Button> 
                    </div>
                </div>
            </div>
            <div>
                <TextBox>Lorem</TextBox>
            </div>
        </div>
    )
}

//bg-gradient-to-r from-green-300 via-blue-500 to-purple-600