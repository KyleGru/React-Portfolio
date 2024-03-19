import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiExpress, SiMongodb} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const Resume = () => {

    const resumeUrl = ""

    const technologies = [
        {icon: <FaHtml5 />, name: 'HTML'},
        {icon: <FaCss3Alt />, name: 'CSS'},
        {icon: <FaReact />, name: 'React'},
        {icon: <FaNodeJs />, name: 'Node'},
        {icon: <FaJs />, name: 'JavaScript'},
        {icon: <SiExpress />, name: 'Express'},
        {icon: <SiMongodb />, name: 'MongoDB'},
        {icon: <GrMysql />, name: 'MySQL'},
    ];
    
    return (
        <div className='container'>
            <div>
                <h1>Technologies</h1>
                <ul>
                    {technologies.map((technology, index) => (
                        <li key={index}>
                            {technology.icon} {technology.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mt-5'>
                <h4>Please download my resume here:</h4>
                <a href={resumeUrl} download='Kyle%20Gruschow%20Resume.pdf' className='submitBtn' id='resumeDownloadBtn'>Resume</a>
            </div>
        </div>
        
        
        // Resume Link
    )
}

export default Resume;