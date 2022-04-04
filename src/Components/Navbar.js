import React from "react"

export default function navbar(props){
    return(
        <div className={`w-screen fixed py-2 ${!props.className ? "" : props.className}`}>
            <nav className="max-w-3xl m-auto flex flex-row justify-between uppercase body-text text-base md:text-lg w-11/12 md:w-1/2">
                <a href="/">Home</a>
                <a href="/join">Join</a>
                <a href="/workshop">Workshop</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
}