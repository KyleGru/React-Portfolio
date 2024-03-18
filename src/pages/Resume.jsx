import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiExpress, SiMongodb} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

const Resume = () => {
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
            <h1>Technologies</h1>
            <ul>
                {technologies.map((technology, index) => (
                    <li key={index}>
                        {technology.icon} {technology.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Resume;