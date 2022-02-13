import './hover.css'
import Button from "./Components/Button"
import {FaDiscord} from 'react-icons/fa';
import {SiMicrosoftteams} from 'react-icons/si';
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
            <div className="text-white py-20 px-16">
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
            <div className="text-black bg-white py-20 px-16">
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