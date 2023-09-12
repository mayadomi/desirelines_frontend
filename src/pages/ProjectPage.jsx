// import { oneProject } from "../data";
import useProject from "../hooks/use-project";
import { useParams } from 'react-router-dom';

function ProjectPage() {
    // return <h1>This is the project page.</h1>;
    const {id} = useParams();
    const {project, isLoading, error} = useProject(id)
    
    if (isLoading){
        return<div>I'm still loading</div>
    }
    return(
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Pledges</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default ProjectPage