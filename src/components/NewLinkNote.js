import { NOTE_TYPE } from '../data/data.js';
import { NO_PROJECT } from '../data/data.js';

const NewLinkNote = props =>
    <div className="card card-body">            
        <h3 className="card-title">New Note</h3>
        <label className="form-label">Project:
            <select className="form-control">
                <option value={NO_PROJECT}>--No Project--</option>
                {
                    Object.keys(props.projects).map((project, index) =>
                        <option key={index}>{project}</option>                
                    )
                } 
            </select>
        </label>        
        <label className="form-label">URL:
            <input type="url" 
                className="form-control"
                onChange={e => props.setNewLinkNote({...props.newLinkNote, url : e.target.value})}
                value={props.newLinkNote.url}
            />
        </label>
        
        <label className="forn-label">Text:
        <input type="text"
            className="form-control" 
            onChange={e => props.setNewLinkNote({...props.newLinkNote, text : e.target.value})}
            value={props.newLinkNote.text}
        />
        </label>
        
        <button className="btn btn-primary col-12"
            onClick={() => {
                props.addNewNote(document.getElementById("new-link-project").value, props.newLinkNote);
                props.setNewLinkNote({
                    type: NOTE_TYPE.LINKT,
                    url: "",
                    text: ""
                })
            }

        }>+</button>
    </div>

export default NewLinkNote;