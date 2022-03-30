import Button from "./Button"
import {SiContactlesspayment, SiMicrosoftteams} from 'react-icons/si';


export default function LeaderDesc(props){
    console.log(props.buttons)
    return(
        <div className={`mb-10 ${props.className ? props.className : ""}`}>
            <h2 className="subheading-text text-cyan-600 mb-3">{`${props.name} (${props.role})`}</h2>
            <p>{props.children}</p>
            <div className="flex flex-row space-between justify-around mt-5 title-text text-base">
                {props.buttons}
            </div>
        </div>
    )
}