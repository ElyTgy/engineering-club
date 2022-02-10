export default function Button(props){
    return(
        <button className={`
            subheading-text text-white cursor-pointer text-center 
            w-48 h-12 m-6 
            border-none rounded-2xl
            bg-[length:300%_100%] 
            transition-all ease-in-out duration-500
            hover:bg-[80%_0]
            bg-gradient-to-r from-${props.gradient1} via-${props.gradient2} to-${props.gradient3}`}>
        {props.children}</button>
    )
}
