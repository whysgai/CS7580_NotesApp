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
                <label className="input-group">
                    <input type="text" className="form-control"
                        placeholder="Project title..."
                        value={props.newProject}
                        onChange={e => props.setNewProject(e.target.value)}
                    />
                    <button className="btn btn-outline-secondary" type="button" 
                        onClick={props.addNewProject}
                    >
                        +
                    </button>
                </label>
            </div>
        </div>            

    </div>

export default ProjectList;