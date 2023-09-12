import { Link } from 'react-router-dom';
import './ProjectCard.css';


function ProjectCard(props) {
    const { projectData } = props;
    const projectPath = `project/${projectData.id}`
    
    // const {project, isLoading, error }

    return (
        <div className="project-card">
            <Link to={projectPath} >
                <img src={projectData.image} />
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;