import { NOTE_TYPE } from '../data/data.js';
import { NO_PROJECT } from '../data/data.js';

const NewLinkNote = props =>
    <div className="card card-body">            
        {/* <h3 className="card-title">New Note</h3> */}
        <label className="form-label">Project:
            <select className="form-control" id="new-link-project">
                {
                    Object.keys(props.projects).map((project, index) =>
                        <option key={index}>{project}</option>                
                    )
                } 
            </select>
        </label>        
        <label className="form-label">URL (requires protocol prefix):
            <input type="url" 
                className="form-control url-input"
                onChange={e => props.setNewLinkNote({...props.newLinkNote, url : e.target.value})}
                value={props.newLinkNote.url}
            />
        </label>
        
        <label className="form-label">Text:
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
                    type: NOTE_TYPE.LINK,
                    url: "",
                    text: ""
                })
            }}
        >
            Create Link Note
        </button>
        {
            props.newLinkAlert ?
                <div className="alert alert-danger" role="alert">
                    Link notes must have a url.
                </div>
            : ""
        }  
    </div>

export default NewLinkNote;