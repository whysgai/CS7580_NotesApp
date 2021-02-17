const ProjectFilter = props =>
    <div className="">
        <ul>
            {
                Object.keys(props.projects).map((project, index) => 
                    <li key={index}>{project}</li>               
            )
            }
        </ul>            

    </div>

export default ProjectFilter;