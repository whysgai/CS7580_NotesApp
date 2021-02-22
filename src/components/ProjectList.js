const ProjectList = props =>
    <div className="">
        {console.log("Visible projects:", props.visibleProjects)}
        <div className="list-group">
            <div className="list-group-item list-group-item-dark">Filter projects:</div>
            {
                Object.keys(props.projects).map((project, index) =>
                    <label className="list-group-item list-group-item-action project-filter-label" key={index}>
                        <span>{project}</span>                        
                        <input className="form-check-input" type="checkbox" value="project-filter" onChange={() => props.updateProjectFilter(project)}></input>                                              
                    </label>               
                )
            }
            <div className="list-group-item">
                <label className="form-label" for="new-project-input">New Project</label>
                <div className="input-group">
                    <input type="text" className="form-control" id="new-project-input"
                        placeholder="Project title..."
                        value={props.newProject}
                        onChange={e => props.setNewProject(e.target.value)}
                    />
                    <button className={`btn btn-primary ${props.newProject === "" ? "disabled" : ""}`} type="button" 
                        onClick={props.addNewProject}
                    >
                        +
                    </button>
                </div>
            </div>
            {
                props.projectAlert ?
                    <div className="alert alert-warning" role="alert">
                        A project with that name already exists.
                    </div>
                : ""
            }
            
        </div>            

    </div>

export default ProjectList;