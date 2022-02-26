import {BsArrowDown} from 'react-icons/bs';
import '.././test.css'

export default function Arrow(props){
    return(
        <a href={props.href} className="cursor-pointer scroll-smooth animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full absolute bottom-0">
            <BsArrowDown className="scroll-smooth inline"/> 
        </a>
    )
}
