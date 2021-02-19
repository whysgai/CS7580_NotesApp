const ProjectFilter = props =>
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
            <div className="list-group-item list-group-item-action">+</div>
        </div>            

    </div>

export default ProjectFilter;