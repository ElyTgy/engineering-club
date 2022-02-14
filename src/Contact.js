import Button1 from "./Components/Button1"
import {SiPolywork, SiDiscord, SiGithub} from 'react-icons/si';
import LeaderDesc from "./Components/LeaderDesc";

export default function Contact(props){
    return (
    <div className="bg-white py-20 px-10">
        <h1 className="heading-text text-center text-3xl mb-8 text-cyan-500">Contact Us</h1>
        <LeaderDesc name="Ellie Taghavi" role="Leader" className="m-auto"
            buttons={
                [
                   <Button1 className="w-20 h-16 text-center flex justify-center" href="https://example.com" icon={<SiDiscord className="w-6 h-6"/>}/>,
                   <Button1 className="w-20 h-16 text-center flex justify-center" href="https://example.com" icon={<SiGithub className="w-6 h-6"/>}/>,
                   <Button1 className="w-20 h-16 text-center flex justify-center" href="https://example.com" icon={<SiPolywork className="w-6 h-6"/>}/>,
                ]
            }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </LeaderDesc>
        
        <LeaderDesc name="Spencer Grey" role="Leader" className="m-auto"
            buttons={
                [
                   <Button1 className="w-20 h-16 text-center flex justify-center" href="https://example.com" icon={<SiDiscord className="w-6 h-6"/>}/>,
                   <Button1 className="w-20 h-16 text-center flex justify-center" href="https://example.com" icon={<SiGithub className="w-6 h-6"/>}/>,
                   <Button1 className="w-20 h-16 text-center flex justify-center" href="https://example.com" icon={<SiPolywork className="w-6 h-6"/>}/>,
                ]
            }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </LeaderDesc>
        
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