import Button from "./Button"

export default function(props){
    return(
        <Button gradient1="green-300" gradient2="blue-500" gradient="green-300"
            className={`flex flex-row text-center items-center lg:w-52 lg:h-14 ${props.className ? props.className : ""}`}>
            <a href={props.href}>{props.icon}</a>    
            <span>{props.text}</span>
        </Button>
    )
}
