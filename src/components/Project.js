import NoteShell from './NoteShell.js';

const Project = props =>
    <div className="project-card">
        <div className="card">
            <div className="card-body">            
                <h2 className="card-title">
                    {props.name} 
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#project-${props.name}`} aria-expanded="true" aria-controls={`project-${props.name}`}>
                        Collapse
                    </button>
                </h2>
            </div>
            <ul className="list-group list-group-flush collapse.show" id={`project-${props.name}`}>
                {
                    props.notes.map((note, index) => 
                        <NoteShell key={index} title={note.title} text={note.text} url={note.url} type={note.type}></NoteShell>
                    )
                }
            </ul>            
        </div>        
    </div>

export default Project;