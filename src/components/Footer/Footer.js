import './Footer.scss'

import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer_container'>
            <p className='footer_creator'>Created by &nbsp;<a href="https://aitorpalleja.dev/" target="_blank" rel='noreferrer'>Aitor Palleja</a></p>
            <a className='footer_icon' href="https://www.linkedin.com/in/aitorpalleja/" target="_blank" rel='noreferrer'><FaLinkedin size={25} /></a>

        </div>
    );
}

export default Footer;