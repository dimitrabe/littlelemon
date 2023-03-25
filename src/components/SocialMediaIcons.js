import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium, faStackOverflow, faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const socialMediaIconsList = [
    {
        id : 1,
        url : 'mailto:pete@pete.com',
        iconSrc:  faEnvelope,
        toDisplay: true,
    },
    {
        id : 2,
        url : 'https://www.github.com',
        iconSrc:  faGithub,
        toDisplay: false,
    },
    {
        id : 3,
        url : 'https://www.linkedin.com',
        iconSrc:  faLinkedin,
        toDisplay: false,
    },
    {
        id : 4,
        url : 'https://www.medium.com',
        iconSrc:  faMedium,
        toDisplay: false,
    },
    {
        id : 5,
        url : 'https://www.stackoverflow.com',
        iconSrc:  faStackOverflow,
        toDisplay: false,
    },
    {
        id : 6,
        url : 'https://www.facebook.com',
        iconSrc:  faFacebook,
        toDisplay: true,
    },
    {
        id : 7,
        url : 'https://www.instagram.com',
        iconSrc:  faInstagram,
        toDisplay: true,
    },
    {
        id : 8,
        url : 'https://www.pinterest.com',
        iconSrc:  faPinterest,
        toDisplay: true,
    },
    {
        id : 9,
        url : 'https://www.twitter.com',
        iconSrc:  faTwitter,
        toDisplay: false,
    }
];

const linksSocialMediaIcons = socialMediaIconsList.map( theIcon => {
    //console.log(theIcon);
    return (
        theIcon.toDisplay && (
            <li key={theIcon.id}>
                <a href={theIcon.url}>
                    <FontAwesomeIcon icon={theIcon.iconSrc} size="2x" />
                </a>
            </li>
        )
    );
})

function SocialMediaIcons(props){
    return(
        <ul className={props.className}>
            {linksSocialMediaIcons}
        </ul>
    );
};

export default SocialMediaIcons;