import './hover.css'
import TextBox from './Components/TextBox';
import Button from "./Components/Button"
import {FaDiscord} from 'react-icons/fa';
import {SiMicrosoftteams} from 'react-icons/si';
import Box from "./Components/Box";
import Footer from './Components/Footer';
import Canvas from "./Components/Particle/wireframe"

export default function Join(props){
    return ( 
        <div>
            <div className="bg-white text-black h-[90vh] flex items-center text-center justify-center">
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
            <div className="text-white">
                <h1 className="text-cyan-500 m-8 text-center subheading-text text-3xl">What should I do for the first meeting?</h1>
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
        </div>
    )
}

//bg-gradient-to-r from-green-300 via-blue-500 to-purple-600