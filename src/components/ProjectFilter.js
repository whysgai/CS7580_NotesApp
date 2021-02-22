const ProjectFilter = props =>
    <label className="list-group-item list-group-item-action project-filter-label">
        <span>{props.project}</span>                        
        <input className="form-check-input" type="checkbox" value="project-filter" onChange={() => props.updateProjectFilter(props.project)}></input>                                              
    </label>  

export default ProjectFilter;