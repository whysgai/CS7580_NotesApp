import Project from '../components/Project.js';

const NoteList = props =>
    <div>            
        {
            Object.keys(props.notes).map((project, index) => 
                <Project key={index} name={project} notes={props.notes[project]}/>                
            )
        }
    </div>

export default NoteList;