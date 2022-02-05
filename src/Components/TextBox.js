export default function TextBox(props){
    return(
        <div className={`${props.className ? props.className : ""} m-auto w-10/12 flex justify-center items-center bg-green-400 flex-col`}>
            <div className="w-10/12 text-center py-5">
                <h3 className="subheading-text">{props.title}</h3>
                <p className="body-text">{props.children}</p>
            </div>
        </div>
    )
}