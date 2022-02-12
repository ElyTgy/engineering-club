export default function TextBox(props){
    return(
        <div className={`m-auto w-10/12 my-5 body-text ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    )
}