import { Link, HStack} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
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
        toDisplay: true,
    },
    {
        id : 3,
        url : 'https://www.linkedin.com',
        iconSrc:  faLinkedin,
        toDisplay: true,
    },
    {
        id : 4,
        url : 'https://www.medium.com',
        iconSrc:  faMedium,
        toDisplay: true,
    },
    {
        id : 5,
        url : 'https://www.stackoverflow.com',
        iconSrc:  faStackOverflow,
        toDisplay: true,
    }
];

const linksSocialMediaIcons = socialMediaIconsList.map( theIcon => {
    //console.log(theIcon);
    return (
        theIcon.toDisplay && (
            <Link key={theIcon.id} href={theIcon.url} isExternal>
                    <FontAwesomeIcon icon={theIcon.iconSrc} size="2x" />
            </Link>
        )
    );
})

function SocialMediaIcons(props){
    return(       
        <HStack spacing='20px'> 
            {linksSocialMediaIcons}
        </HStack>                       
    );     
};

export default SocialMediaIcons;