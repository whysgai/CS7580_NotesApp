import data from "../data/data";
import { NOTE_TYPE } from '../data/data.js';
import { NO_PROJECT } from '../data/data.js';

const NewTextNote = props =>
    <div className="card card-body">            
        <h3 className="card-title">New Note</h3>
        <label>Project: </label>
        <select id="new-text-project">
            <option value={NO_PROJECT}>--No Project--</option>
            {
                Object.keys(props.projects).map((project, index) =>
                    <option key={index}>{project}</option>                
                )
            }                      
        </select>
        <label>Title:</label>
        <input type="text" onChange={e => props.setNewTextNote({...props.newTextNote, title : e.target.value})} value={props.newTextNote.title}></input>
        <label>Text:</label>
        <textarea type="textarea" onChange={e => props.setNewTextNote({...props.newTextNote, text : e.target.value})} value={props.newTextNote.text}></textarea>
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
            +
        </button>
    </div>

export default NewTextNote;