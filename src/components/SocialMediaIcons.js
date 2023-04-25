import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium, faStackOverflow, faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// I used this reference for the aria label and aria hidden of social media icons
// https://savvas.me/accessibility/problem-with-social-icons
const socialMediaIconsList = [
    {
        id : 1,
        url : 'mailto:littlelemon@littlelemon.com',
        iconSrc:  faEnvelope,
        toDisplay: true,
        ariaLabel: "Send an email to Little Lemon!"
    },
    {
        id : 2,
        url : 'https://www.github.com',
        iconSrc:  faGithub,
        toDisplay: false,
        ariaLabel: "Find us on Github!"
    },
    {
        id : 3,
        url : 'https://www.linkedin.com',
        iconSrc:  faLinkedin,
        toDisplay: false,
        ariaLabel: "Follow us on Linkedin!"
    },
    {
        id : 4,
        url : 'https://www.medium.com',
        iconSrc:  faMedium,
        toDisplay: false,
        ariaLabel: "Follow us on Medium!"
    },
    {
        id : 5,
        url : 'https://www.stackoverflow.com',
        iconSrc:  faStackOverflow,
        toDisplay: false,
        ariaLabel: "Find us on Stackoverflow!"
    },
    {
        id : 6,
        url : 'https://www.facebook.com',
        iconSrc:  faFacebook,
        toDisplay: true,
        ariaLabel: "Follow us on Facebook!"
    },
    {
        id : 7,
        url : 'https://www.instagram.com',
        iconSrc:  faInstagram,
        toDisplay: true,
        ariaLabel: "Follow us on Instagram!"
    },
    {
        id : 8,
        url : 'https://www.pinterest.com',
        iconSrc:  faPinterest,
        toDisplay: true,
        ariaLabel: "Follow us on Pinterest!"
    },
    {
        id : 9,
        url : 'https://www.twitter.com',
        iconSrc:  faTwitter,
        toDisplay: false,
        ariaLabel: "Follow us on Twitter!"
    }
];

const linksSocialMediaIcons = socialMediaIconsList.map( theIcon => {
    //console.log(theIcon);
    return (
        theIcon.toDisplay && (
            <li key={theIcon.id} role="none">
                <a href={theIcon.url} aria-label={theIcon.ariaLabel}>
                    <FontAwesomeIcon icon={theIcon.iconSrc} size="2x" aria-hidden="true"/>
                </a>
            </li>
        )
    );
})

function SocialMediaIcons(props){
    return(
        <ul className={props.className} role="none">
            {linksSocialMediaIcons}
        </ul>
    );
};

export default SocialMediaIcons;