import React from 'react'
import Fade from 'react-reveal/Fade';

import SocialButton from './SocialButton/SocialButton';
import LinkedInImage from '../../../assets/images/linkedin-32.png';
import FbImage from '../../../assets/images/facebook-32.png';
import TwitterImage from '../../../assets/images/twitter-32.png';
import GithubImage from '../../../assets/images/github.png';
import MailImage from '../../../assets/images/mail.png';

import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={classes.Footer} id="footer">
            <Fade bottom>
                <div className="row center-xs">
                    <div className={[classes.Email, "row center-xs"].join(" ")}>
                        <img className={classes.Img} src={MailImage} alt="Mail me" />
                        <span className={classes.Address}>jaskaransr93@gmail.com</span>
                    </div>
                    <SocialButton url="https://www.linkedin.com/in/jaskaransr93/">
                        <img src={LinkedInImage} alt="Linkedin" />
                    </SocialButton>
                    <SocialButton url="https://www.facebook.com/jaskaransr93">
                        <img src={FbImage} alt="Facebook" />
                    </SocialButton>
                    <SocialButton url="https://twitter.com/jaskaransr93">
                        <img src={TwitterImage} alt="Twitter" />
                    </SocialButton>
                    <SocialButton url="https://github.com/jaskaransr93">
                        <img src={GithubImage} alt="Github" />
                    </SocialButton>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;
