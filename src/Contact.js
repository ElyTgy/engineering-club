import Button from "./Components/Button"
import {SiMicrosoftteams} from 'react-icons/si';

export default function Contact(props){
    return (
    <div className="bg-white py-20 px-10">
        <h1 className="heading-text text-center text-3xl mb-8 text-cyan-500">Contact Us</h1>
        <div>
            <h2 className="subheading-text text-cyan-600 mb-3">Ellie Taghavi (Co-Leader)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            <div className="">
                <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                        className="flex flex-row text-center items-center lg:w-52 lg:h-14">
                        <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-3"/></a>    
                        <span>Join on Teams</span>
                </Button>
                <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                        className="flex flex-row text-center items-center lg:w-52 lg:h-14">
                        <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-3"/></a>    
                        <span>Join on Teams</span>
                </Button>
                <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                        className="flex flex-row text-center items-center lg:w-52 lg:h-14">
                        <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-3"/></a>    
                        <span>Join on Teams</span>
                </Button> 
            </div>
        </div>
        <div>
            <h2>Spencer Gray (Co-Leader)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p>
            <div>
                <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                        className="flex flex-row text-center items-center lg:w-52 lg:h-14">
                        <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-3"/></a>    
                        <span>Join on Teams</span>
                </Button>
                <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                        className="flex flex-row text-center items-center lg:w-52 lg:h-14">
                        <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-3"/></a>    
                        <span>Join on Teams</span>
                </Button>
                <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
                        className="flex flex-row text-center items-center lg:w-52 lg:h-14">
                        <a href="https://exmaple.com"><SiMicrosoftteams className="w-6 h-6 mx-3"/></a>    
                        <span>Join on Teams</span>
                </Button> 
            </div>
        </div>
        <div>
            <form action="https://formspree.io/f/xgedkvnn"
                    method="POST">
                <label htmlFor="fname">First Name</label>
                <input type="text" name="firstname" placeholder="your name"/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" name="lastname" placeholder="your last name"/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="your email"/>

                <label htmlFor="text">Subject</label>
                <textarea name="text" placeholder="What do you want to say?" required/>

                <button>Submit</button>
            </form>
        </div>
    </div>)
}