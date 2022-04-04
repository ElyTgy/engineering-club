import Button1 from "./Components/Button1"
import LeaderDesc from "./Components/LeaderDesc";
import CopyText from "./Components/CopyText";


export default function Contact(props){
    return (
    <div className="bg-white py-20 px-10">
        <div className="max-w-5xl m-auto">
            <h1 className="heading-text text-center text-3xl mb-8 text-cyan-500">Contact Us</h1>
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
            <div className="md:w-[1/2]">
                <h1 className="mt-10 subheading-text text-center text-2xl mb-8 text-cyan-600">Got a Question?</h1>
                <form action="https://formspree.io/f/xgedkvnn"
                        method="POST">
                    <div className="flex flex-col items-center w-[100%] body-text">
                        <div className="sm:grid-cols-2 grid w-[100%] lg:w-10/12 xl:w-8/12">
                            <div className="flex flex-col sm:w-10/12">
                                <input className="mb-3 border-2 p-2 rounded-md 
                                                focus:outline-none focus:border-slate-600" type="text" name="firstname" placeholder="first name" required/>
                                <input className="mb-3 border-2 p-2 rounded-md focus:outline-none 
                                                focus:border-slate-800" type="text" name="lastname" placeholder="last name" required/>
                                <input className="mb-3 border-2 p-2 rounded-md 
                                                    focus:outline-none focus:border-slate-600" type="email" name="email" placeholder="email" required/>
                            </div>
                            <textarea className="h-[100%] border-2 p-2 rounded-md focus:outline-none focus:border-slate-600" name="text" placeholder="What do you want to say?" required/>
                        </div>
                        <Button1 className="m-auto" text="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}