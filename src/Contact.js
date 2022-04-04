import Button1 from "./Components/Button1"
import LeaderDesc from "./Components/LeaderDesc";
import CopyText from "./Components/CopyText";

import Form from "./Components/Form.js";


export default function Contact(props){
    return (
    <div className="bg-white py-20 px-10">
        <div className="max-w-5xl m-auto">
            <h1 className="heading-text text-center text-3xl mb-8 text-cyan-500">Contact Us</h1>
            <div className="mb-32">
                <LeaderDesc name="Spencer Grey" role="Leader">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                </LeaderDesc>
                
                <LeaderDesc name="Ellie Taghavi" role="Leader"
                    buttons={
                        [
                            <CopyText text="discord" copyText="elytgy#4725"/>,
                            <a className="link" href="https://github.com/elytgy" target="_blank">github</a>,
                            <a className="link" href="https://www.polywork.com/elytgy" target="_blank">polywork</a>,
                        ]
                    }>
                    Hi! I'm Ellie. I'm really interested in software and how it can be used alongside projects at our club. I have been programming for about two years now; with most of my focus begin on full-stack development and competetive programming. Every now and then I also make stuff with micro-controllers. I also enjoy going to hackathons! If you're also a dev or interested in engineering, then reach out to me :)
                </LeaderDesc>
            </div>
            <Form/>
        </div>
    </div>)
}