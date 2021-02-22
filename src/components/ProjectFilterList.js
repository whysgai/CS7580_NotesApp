import NewProject from "./NewProject";
import ProjectFilter from "./ProjectFilter";


const ProjectFilterList = props =>
    <div className="">
        {console.log("Visible projects:", props.visibleProjects)}
        <div className="list-group">
            <div className="list-group-item list-group-item-dark">
                <h3 className="title-with-button">
                    <span>Filter projects:</span>
                    <button className="btn btn-primary collapse-project-filters" type="button" data-bs-toggle="collapse" data-bs-target="#project-filters" aria-expanded="true" aria-controls="project-filters">
                        Expand
                    </button>
                </h3>
                
            </div>
            <div className="collapse show filters-list" id="project-filters">
                {
                    Object.keys(props.projects).map((project, index) =>
                        <ProjectFilter key={index} project={project} updateProjectFilter={props.updateProjectFilter}/>             
                    )
                }
                <NewProject newProject={props.newProject} setNewProject={props.setNewProject} projectAlert={props.projectAlert}/>              
            </div>            
        </div>
    </div>

export default ProjectFilterList;