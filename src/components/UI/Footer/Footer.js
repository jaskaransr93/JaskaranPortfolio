import React from 'react'

import SocialButton from './SocialButton/SocialButton';

import classes from './Footer.module.scss';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className={classes.Footer} id="footer">
            <Fade direction="down">
                <div className="row center-xs">
                    <div className={[classes.Email].join(" ")}>
                        <a className="row center-xs" href="mailto:jaskaransr93@gmail.com">
                            <Image width={10} height={10} className={classes.Img} src="/assets/images/mail.png" alt="Mail me" />
                            <span className={classes.Address}>jaskaransr93@gmail.com</span>
                        </a>
                    </div>
                    <SocialButton url="https://www.linkedin.com/in/jaskaransr93/">
                        <Image fill src="/assets/images/linkedin-32.png" alt="Linkedin" />
                    </SocialButton>
                    <SocialButton url="https://www.facebook.com/jaskaransr93">
                        <Image fill src="/assets/images/facebook-32.png" alt="Facebook" />
                    </SocialButton>
                    <SocialButton url="https://twitter.com/jaskaransr93">
                        <Image fill src="/assets/images/twitter-32.png" alt="Twitter" />
                    </SocialButton>
                    <SocialButton url="https://github.com/jaskaransr93">
                        <Image fill src="/assets/images/github.png" alt="Github" />
                    </SocialButton>
                </div>
            </Fade>
        </footer>
    )
}

export default Footer;
