import './Navbar.css';
// import { FaUserGraduate } from "react-icons/fa";
// import { TbCertificate } from "react-icons/tb";
// import { MdWork } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { MdComputer } from "react-icons/md";
// import { BiMedal } from "react-icons/bi";
import { Link } from 'react-scroll';


function Navbar() {
    return (
        <div className="nav">
        
            <div>
                 <Link className="abt" to="about" >About</Link>
                {/* <h2 className="icon pro"><CgProfile /> </h2> */}
            </div>
          
            <div>
                <Link className="exp" to="experience"  >Experience</Link>
                {/* <h2 className="icon work"><MdWork /> </h2> */}
                
            </div>
            <div>
                <Link className="pro" to="project" >Project</Link>
                {/* <h2 className="icon project"><MdComputer /> </h2> */}
                
            </div>
            <div>
                <Link className="edu" to="education">Education</Link>
                {/* <h4 className="icon edu"><FaUserGraduate /> </h4> */}
              
            </div>
            <div>
                <Link className="skill"  to="skills" >Skills</Link>
                {/* <h2 className="icon skills" ><BiMedal /> </h2> */}
               
            </div>
            <div>
                <Link className="certi" to="certification">Certification</Link>
                {/* <h2 className="icon certificate"><TbCertificate /> </h2> */}
              
            </div>
            </div>
           
          
            
      
    )
}
export default Navbar;