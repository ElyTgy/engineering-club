export default function Button(props){
    return(
        <a  href={props.href}
            target="_blank"
            className={`
            subheading-text text-white cursor-pointer text-center 
            w-36 sm:w-48 h-12 m-6 drop-shadow-md
            border-none rounded-2xl
            bg-[length:250%_100%] 
            transition-all ease-in-out duration-500
            hover:bg-[50%_0]
            bg-gradient-to-r from-${props.gradient1} via-${props.gradient2} to-${props.gradient3}
            ${props.className ? props.className : ""}`}>
                {props.children}
        </a>
    )
}
