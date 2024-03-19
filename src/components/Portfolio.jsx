import { useState } from 'react';
import { FaGithub } from 'react-icons/fa'

const Projects = () => {

    const projectArray = [
        {
            name: 'PWA Text Editor',
            description: 'Full-Stack MVC',
            image: 'jateTextEditor.png',
            githubLink: 'https://github.com/KyleGru/PWA-Text-Editor'
        },
        {
            name: 'E-Commerce Backend',
            description: 'MySQL Database',
            image: 'ecommerceBackend.png',
            githubLink: 'https://github.com/KyleGru/E-Commerce-back-end'
        },
        {
            name: 'Note Taker',
            description: 'ExpressJs Backend',
            image: 'noteTaker.png',
            githubLink: 'https://github.com/KyleGru/Note-Taker'
        },
        {
            name: 'Social Network API',
            description: 'NoSQL MongoDB',
            image: 'socialNetworkAPI.png',
            githubLink: 'https://github.com/KyleGru/NoSQL-Social-Media-API'
        }
    ]

    const [openCardIndex, setOpenCardIndex] = useState(null);

    const handleCardClick = (index) => {
        setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='wrapper-container'>
            {projectArray.map((project, index) => (
                <div key={index} className='wrapper'>
                    <label
                        onClick={() => handleCardClick(index)}
                        className={`project-card ${openCardIndex === index ? 'open' : ''}`}
                        style={{ backgroundImage: `url(${project.image})` }}
                        >
                        <div className='card-row' >
                            <div className='card-overlay' >
                                <div className='card-title'>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                    <a href={project.githubLink} target="_blank" rel="noreferrer">
                                        <FaGithub size={30}></FaGithub>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Projects;