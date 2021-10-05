 import './Navbar.css';
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faBars} from "@fortawesome/free-solid-svg-icons";
 import { Link} from "react-scroll";
// import ReactDOM from 'react-dom';
// import { HashLink as  Link } from 'react-router-hash-link';


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark position-fixed ">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
  </button>
            <div className="collapse navbar-collapse  " id="navbarSupportedContent">
               
                <ul className="navbar-nav ms-auto" >
                    <li className="nav-item active">
                    < Link smooth={true} to="home" duration={1000} className="nav-link">
                         Home 
                    </ Link>    
                       
                    </li>
                    <li className="nav-item">
                    < Link smooth={true} to="about" duration={1000} className="nav-link" >
                       About
                        </ Link>    
                    </li>
                    <li className="nav-item">
                    < Link smoot={true} to="skills" duration={1000}  className="nav-link">
                      Skills
                     </ Link>    
                        
                    </li>
                    <li className="nav-item">
                    < Link smooth={true} to="contact"  duration={1000} className="nav-link" >
                        Contact
                        </ Link>    
                        
                    </li>
                   
                   
                </ul>
               
               
            </div>
           
        </nav>
    )
}
export default NavBar;