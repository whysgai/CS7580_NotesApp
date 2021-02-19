import Project from '../components/Project.js';

const NoteList = props =>
    <div>            
        {
            Object.keys(props.projects).map((project, index) => 
                (props.visibleProjects.includes(project) || props.visibleProjects.length === 0) ?
                    <Project key={index} name={project} notes={props.projects[project]}/>   
                    : ""             
            )
        }
    </div>

export default NoteList;