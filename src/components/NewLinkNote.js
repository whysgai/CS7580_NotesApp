import { NOTE_TYPE } from '../data/data.js';
import { NO_PROJECT } from '../data/data.js';

const NewLinkNote = props =>
    <div className="card card-body">            
        <h3 className="card-title">New Note</h3>
        <label>Project: </label>
        <select id="new-link-project">
            <option value={NO_PROJECT}>--No Project--</option>
            {
                Object.keys(props.projects).map((project, index) =>
                    <option key={index}>{project}</option>                
                )
            } 
        </select>
        <label>URL:</label>
        <input type="url" onChange={e => props.setNewLinkNote({...props.newLinkNote, url : e.target.value})} value={props.newLinkNote.url}></input>
        <label>Text:</label>
        <input type="text" onChange={e => props.setNewLinkNote({...props.newLinkNote, text : e.target.value})} value={props.newLinkNote.text}></input>
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