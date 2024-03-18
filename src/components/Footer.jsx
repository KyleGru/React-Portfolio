import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const github = 'https://github.com/KyleGru'
    const linkedin = 'https://www.linkedin.com/in/kyle-gruschow-4268082a4/'
    const twitter = 'https://twitter.com/grooshboom2711'

  return (
    <div className='footer-main'>
        <div className='footer-fixed-bottom p-4'>
            <div className='icon-links'>
                <a href={linkedin} target='_blank' rel='noreferrer'>
                    <i className='icon-link'><FaLinkedin size={40} /></i>
                </a>
                <a href={github} target='_blank' rel='noreferrer'>
                    <i className='icon-link'><FaGithub size={40} color='black' /></i>
                </a>
                <a href={twitter} target='_blank' rel='noreferrer'>
                    <i className='icon-link'><FaTwitter size={40}  /></i> 
                </a>
            </div>
        </div>
    </div>
  );
};

export default Footer; // Exporting Footer as default
