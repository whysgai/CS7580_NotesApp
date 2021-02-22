import NewTextNote from './NewTextNote.js';
import NewLinkNote from './NewLinkNote.js';

const NewNote = props =>
    <div className="">            
        <button type="button" className="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#new-note-types" aria-expanded="false" aria-controls="new-note-types">New Note</button>
        <div className="btn-group col-12 collapse" id="new-note-types">
            <button type="button" className="btn btn-outline-dark"
                data-bs-toggle="collapse" data-bs-target="#new-text-note" aria-expanded="false" aria-controls="new-text-note"
            >
                Text Note
            </button>
            <button type="button" className="btn btn-outline-dark"
                data-bs-toggle="collapse" data-bs-target="#new-link-note" aria-expanded="false" aria-controls="new-link-note"
            >
                URL Note
            </button>
        </div>
        <div className="collapse" id="new-text-note">
            <NewTextNote projects={props.projects} newTextNote={props.newTextNote} setNewTextNote={props.setNewTextNote} addNewNote={props.addNewNote} newTextAlert={props.newTextAlert}/>
        </div>
        <div className="collapse" id="new-link-note">
            <NewLinkNote projects={props.projects} newLinkNote={props.newLinkNote} setNewLinkNote={props.setNewLinkNote} addNewNote={props.addNewNote} newLinkAlert={props.newLinkAlert}/>
        </div>
    </div>

export default NewNote;