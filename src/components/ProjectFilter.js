const ProjectFilter = props =>
    <div className="">
        <div className="list-group">
            <div className="list-group-item list-group-item-dark">Filter projects:</div>
            {
                Object.keys(props.projects).map((project, index) =>
                    <label className="list-group-item" key={index}>                        
                        <input class="form-check-input" type="checkbox" value=""></input>  
                        <span>{project}</span>                      
                    </label>               
                )
            }
            <div className="list-group-item list-group-item-action">+</div>
        </div>            

    </div>

export default ProjectFilter;