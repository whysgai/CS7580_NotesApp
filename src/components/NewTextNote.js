import data from "../data/data";
import { NOTE_TYPE } from '../data/data.js';
import { NO_PROJECT } from '../data/data.js';

const NewTextNote = props =>
    <div className="card card-body">            
        {/* <h3 className="card-title">New Note</h3> */}
        <label className="form-label">Project: 
            <select className="form-control" id="new-text-project">
                {
                    Object.keys(props.projects).map((project, index) =>
                        <option key={index}>{project}</option>                
                    )
                }
            </select>
        </label>
        <label className="form-label">Title:
            <input type="text"
                className="form-control"
                onChange={e => props.setNewTextNote({...props.newTextNote, title : e.target.value})}
                value={props.newTextNote.title}
                id="new-text-title"
            />
        </label>
        <label className="form-label">Text:
            <textarea type="textarea" 
                className="form-control text-area-whitespace"
                onChange={e => props.setNewTextNote({...props.newTextNote, text : e.target.value})} 
                value={props.newTextNote.text}
                rows="5"
            />
        </label>
        <button className="btn btn-primary col-12" 
            onClick={() => {
                props.addNewNote(document.getElementById("new-text-project").value, props.newTextNote);
                props.setNewTextNote({
                    type: NOTE_TYPE.TEXT,
                    title: "",
                    text: ""
                })
            }}
        >
            Create Text Note
        </button>
        {
            props.newTextAlert ?
                <div class="alert alert-danger" role="alert">
                    Text notes must have a title OR text.
                </div>
            : ""
        }        
    </div>

export default NewTextNote;