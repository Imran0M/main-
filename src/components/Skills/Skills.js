import './Skills.css';
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IconContext } from "react-icons";

function Skills(){
    return(
        <section id="skills">
        <div className="skil-bg "> 
        <div className='container'>
         <h1 className="skills-tittle">Skills</h1>
         <p className="skills-para">These are the Technology skills i have worked with the Projects</p>
        <div className="skills-style">
        <IconContext.Provider value={{ className: "class", size: 50 }}>
            <div className="first-line" >
            <div className="skil ">
              <div className='html-st'> <IoLogoHtml5 /></div> 
              <div className="under-text">HTML5</div>
            </div>
            <div className="skil ">
                <div className='css-st'> <IoLogoCss3/></div>
                <div className="under-text">css3</div>
            </div>
            <div className="skil ">
                <div className='bt-st'><BsBootstrapFill/></div>
            <div  className="under-text">Bootstrap</div>
            </div>
            </div>
            <div className="second-line">
            <div className="skil">
            <div className='js-st'><SiJavascript/></div> 
            <div  className="under-text">JavaScript</div>
            </div>
            <div className="skil ">
                <div className='re-st'><DiReact/></div>
            <div  className="under-text">ReactJs</div>
            </div>
            <div className="skil ">
                <div className="node-st" ><IoLogoNodejs/></div>
            <div  className="under-text">Nodejs</div>
            </div>
            </div>
            <div className="third-line">
            <div className="skil">
                <div className="express-st"><SiExpress/></div>
            <div  className="under-text">Expressjs</div>
            </div>
            <div className="skil">
                <div className="mongodb-st"><SiMongodb/></div>
            <div  className="under-text">MongoDB</div>
            </div>
            <div className="skil ">
                <div className="git-st" ><BsGithub/></div>
            <div  className="under-text">Github</div>
            </div>
            </div>
            </IconContext.Provider>
        </div>
        </div>
        </div>
        </section>
    )
}

export default Skills;