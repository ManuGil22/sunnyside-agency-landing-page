/* STYLESHEETS */
import '../Stylesheets/Footer.css';

/* ICONS IMAGES */
import { AiFillFacebook } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { FaPinterest } from 'react-icons/fa';

function Footer() {
    return(
        <div className='footer-container'>
            <h2 className='footer-header'>sunnyside</h2>
            <ul className='footer-links'>
                <li><a className='link' href="#">About</a></li>
                <li><a className='link' href="#">Services</a></li>
                <li><a className='link' href="#">Projects</a></li>
            </ul>
            <div className='icons-container'>
                <span><AiFillFacebook className='icon-social-media' /></span>
                <span><FiInstagram className='icon-social-media' /></span>
                <span><BsTwitter className='icon-social-media' /></span>
                <span><FaPinterest className='icon-social-media' /></span>
            </div> 
        </div>
    )
}

export default Footer;