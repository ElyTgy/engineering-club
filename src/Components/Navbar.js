import React from "react"

export default function navbar(props){
    return(
        <div className="m-auto w-[50%]">
            <nav className="flex flex-row justify-between uppercase body-text">
                <a href="/">Home</a>
                <a href="join">Join</a>
                <a href="/workshop">Workshop</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
}