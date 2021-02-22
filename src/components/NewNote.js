import NewTextNote from './NewTextNote.js';
import NewLinkNote from './NewLinkNote.js';

const NewNote = props =>
    <div className="">            
        <button type="button" className="btn btn-primary col-12">New Note</button>
        <div className="btn-group col-12">
            <button type="button" className="btn btn-outline-dark">Link Note</button>
            <button type="button" className="btn btn-outline-dark">URL Note</button>
        </div>
        <div>
            <NewTextNote projects={props.projects} newTextNote={props.newTextNote} setNewTextNote={props.setNewTextNote} addNewNote={props.addNewNote} newTextAlert={props.newTextAlert}/>
            <NewLinkNote projects={props.projects} newLinkNote={props.newLinkNote} setNewLinkNote={props.setNewLinkNote} addNewNote={props.addNewNote} newLinkAlert={props.newLinkAlert}/>
        </div>
    </div>

export default NewNote;