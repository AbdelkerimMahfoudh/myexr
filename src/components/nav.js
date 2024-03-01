import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {

    return (
        <div className="container">
            <h1><a href="home">Portfolio</a></h1>
            <div className="page-links">
                <a href="#">Skills </a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div>
            <div className="social-links">
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaGithub /></a>
            </div>
        </div>
    )
}

export default Navbar