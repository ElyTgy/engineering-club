export default function TextBox(props){
    return(
        <div className={`m-auto my-20 w-10/12 flex justify-center items-center flex-col max-w-5xl ${props.className ? props.className : ""}`}>
            <div className="w-10/12 text-center py-5">
                <h3 className={`subheading-text ${props.titleClass ? props.titleClass : ""}`}>{props.title}</h3>
                <p className="body-text">{props.children}</p>
            </div>
        </div>
    )
}