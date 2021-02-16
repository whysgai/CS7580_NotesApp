import NoteShell from './NoteShell.js';

const Project = props =>
    <div>            
        <p>{props.name}</p>
        {
            props.notes.map((note, index) => 
                <NoteShell key={index} title={note.title} text={note.text} url={note.url} type={note.type}></NoteShell>
            )
        }        
    </div>

export default Project;