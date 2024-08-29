import { Link } from "react-router-dom"; 
import '../Gallery/Gallery.css';
import Logo from "/shared/logo.svg"
import Slideshow from "../SlideShow/Slideshow";
   

const Gallery = () => {
    
    return(
<nav>
               
<ul>
    <li className="logo"><Link to="/Home" className="logo"><img src={Logo} /></Link></li>

</ul>

</nav>
    )
}
export default Gallery;