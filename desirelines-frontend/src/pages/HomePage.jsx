// import { allProjects } from "../data";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css";

function HomePage() {
    const { projects, isLoading } = useProjects();
    
    if (isLoading){
        return<div>I'm still loading</div>
    }

    return (
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
                // return <div key={key}>{projectData.title}</div>;
            })}
        </div>
    );
}
export default HomePage;