import './Footer.scss'

import { FaGithub } from 'react-icons/fa';


const Footer = () => {

    return (
        <div className='footer_container'>
            <p className='footer_creator'>Created by &nbsp; ➡️<a href="https://aitorportfolio.vercel.app/" target="_blank" rel='noreferrer'>Aitor Palleja</a>⬅️</p>
            <a className='footer_icon' href="https://github.com/Aitor-bot"><FaGithub size={25} /></a>

        </div>
    );
}

export default Footer;