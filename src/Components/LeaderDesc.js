import Button from "./Button"
import {SiMicrosoftteams} from 'react-icons/si';

export default function LeaderDesc(props){
    return(
        <div className={`mb-10 ${props.className ? props.className : ""}`}>
            <h2 className="subheading-text text-cyan-600 mb-3">{`${props.name} (${props.role})`}</h2>
            <p>{props.children}</p>
            <div className="flex flex-row space-between justify-center">
                {props.buttons}
            </div>
        </div>
    )
}