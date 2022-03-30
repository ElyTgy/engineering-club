import Button1 from "./Components/Button1"
import {SiPolywork, SiDiscord, SiGithub} from 'react-icons/si';
import LeaderDesc from "./Components/LeaderDesc";
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import React, {useState} from 'react';
import Button from "./Components/Button";

//TODO: Add message for five seconds saying sth was copied to clipbord
//TODO: remove buttons, add gradients to links instead
//TODO: add validation message after writing in the form

/*                    <CopyToClipboard text={"elytgy#4725"}
                    onCopy={() => setCopy(true)}>
                        <a className="link">discord</a>
                    </CopyToClipboard>,

*/


export default function Contact(props){
    const [copied, setCopy] = useState(false);
    
    return (
    <div className="bg-white py-20 px-10">
        <h1 className="heading-text text-center text-3xl mb-8 text-cyan-500">Contact Us</h1>
        <LeaderDesc name="Ellie Taghavi" role="Leader" className="m-auto"
            buttons={
                [
                    <a className="link" textcopy="elytgy#4725">discord</a>,
                    <a className="link" href="https://github.com/elytgy" target="_blank">github</a>,
                    <a className="link" href="https://www.polywork.com/elytgy" target="_blank">polywork</a>,
                ]
            }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </LeaderDesc>
        
        <LeaderDesc name="Spencer Grey" role="Leader" className="m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        </LeaderDesc>
        
        <div className="md:w-[1/2]">
            <h1 className="mt-10 subheading-text text-left text-2xl mb-8 text-cyan-600">Got a Question?</h1>
            <form action="https://formspree.io/f/xgedkvnn"
                    method="POST">
                <div className="flex flex-col items-center w-[100%]">
                    <div className="sm:grid-cols-2 grid w-[100%] lg:w-10/12 xl:w-8/12">
                        <div className="flex flex-col sm:w-10/12">
                            <input className="mb-3 border-2 p-2 rounded-md 
                                            focus:outline-none focus:border-slate-600" type="text" name="firstname" placeholder="first name" required/>
                            <input className="mb-3 border-2 p-2 rounded-md focus:outline-none 
                                            focus:border-slate-600" type="text" name="lastname" placeholder="last name" required/>
                            <input className="mb-3 border-2 p-2 rounded-md 
                                                focus:outline-none focus:border-slate-600" type="email" name="email" placeholder="email" required/>
                        </div>
                        <textarea className="h-[100%] border-2 p-2 rounded-md focus:outline-none focus:border-slate-600" name="text" placeholder="What do you want to say?" required/>
                    </div>
                    <Button1 className="m-auto" text="Submit"/>
                </div>
            </form>
        </div>
    </div>)
}
//action=""