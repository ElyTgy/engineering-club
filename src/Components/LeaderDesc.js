export default function LeaderDesc(props){
    return(
        <div className={`mb-10 m-auto ${props.className ? props.className : ""}`}>
            <h2 className="subheading-text text-cyan-600 mb-3">{`${props.name} (${props.role})`}</h2>
            <p className="body-text">{props.children}</p>
            <div className="flex flex-row space-between justify-around mt-5 title-text text-base md:text-xl">
                {props.buttons}
            </div>
        </div>
    )
}