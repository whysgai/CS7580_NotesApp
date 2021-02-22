

import NoteShell from './NoteShell.js';

const Project = props =>
    <div className="project-card">
        <div className="card">
            <div className="card-body">            
                <h2 className="card-title title-with-button">
                    <span>{props.name}</span> 
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#project-${props.name}-collapse`} aria-expanded="true" aria-controls={`project-${props.name}-collapse`}>
                        Collapse
                    </button>
                </h2>
            </div>
            <div className="collapse.show" id={`project-${props.name}-collapse`}>
                <ul className="list-group list-group-flush">
                    {
                        props.notes.map((note, index) => 
                            <li className="list-group-item" key={index}>
                                <NoteShell title={note.title} text={note.text} url={note.url} type={note.type}/>
                            </li>                            
                        )
                    }
                </ul>  
            </div>          
        </div>        
    </div>

export default Project;