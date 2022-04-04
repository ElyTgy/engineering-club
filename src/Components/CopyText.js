import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';


export default function CopyText(props){
    function showNotif(){
        console.log("copied to clipboard")
        Store.addNotification({
            title: "text copied successfully",
            message: `${props.copyText}`,
            type: "success",
            insert: "bottom",
            container: "bottom-left",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
        });
    }

    return(
        <div onClick={showNotif}>
            <CopyToClipboard text={props.copyText}>
                <span className="link">{props.text}</span>
            </CopyToClipboard>
        </div>
    )
}