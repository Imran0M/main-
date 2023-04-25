import './Footer.css'
import {BsLinkedin } from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import { IconContext } from "react-icons";

function Footer(){
    return(
        <div>
        <IconContext.Provider value={{ className: "class", size: 30 }}>
        <div className="footer-style" value={{size:100}}>
        <a  className="dec" href="https://www.linkedin.com/in/mohamed-imran-m" target="blank">
        <div className="linkedin"><BsLinkedin/>
                </div>
        </a>
        <a  className="dec" href="https://www.github.com/MohamedimranM" target="blank">
        <div className="github"><BsGithub/>
                </div>
        </a>
        <a  className="dec" href="mailto:mohamedimranm04@gmail.com" target="blank">
        <div className="email"><MdEmail/>
                </div>
        </a>
        </div>
      
        
        </IconContext.Provider>
        </div>
    )
}
export default Footer