import Project from '../components/Project.js';

const NoteList = props =>
    <div>            
        {
            Object.keys(props.projects).map((project, index) => 
                <Project key={index} name={project} notes={props.projects[project]}/>                
            )
        }
    </div>

export default NoteList;