import React,{Component} from "react";
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{
    render(){
        return(
            <>
            <hr />
            <div id="bo" className="text-center">
             <h3 id="h">Contact us</h3>
             <b>Mob:</b><p>987654321</p>
             <b>Email:</b><p>abc@hmail.com</p>
            </div>
            </>
        )
    }
}
export default Footer;