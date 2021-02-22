import NewTextNote from './NewTextNote.js';
import NewLinkNote from './NewLinkNote.js';

const NewNote = props =>
    <div className="">            
        <button type="button" className="btn btn-primary col-12" type="button" data-bs-toggle="collapse" data-bs-target="#new-note-collapse-parent" aria-expanded="false" aria-controls="new-note-collapse-parent">
            <h2>New Note</h2>
        </button>
        <div className="collapse" id="new-note-collapse-parent">
            <div className="btn-group col-12" id="new-note-types">
                <input type="radio" className="btn-check" name="newNoteRadio" id="radioTextNote" autoComplete="off" 
                    data-bs-toggle="collapse" data-bs-target="#new-text-note" aria-expanded="false" aria-controls="new-text-note"
                />
                <label className="btn btn-outline-primary" htmlFor="radioTextNote">Text Note</label>

                <input type="radio" className="btn-check" name="newNoteRadio" id="radioLinkNote" autoComplete="off" 
                    data-bs-toggle="collapse" data-bs-target="#new-link-note" aria-expanded="false" aria-controls="new-link-note"
                />
                <label className="btn btn-outline-primary" htmlFor="radioLinkNote">Link Note</label>

            </div>
            <div className="collapse" id="new-text-note"  data-bs-parent="#new-note-collapse-parent" >
                <NewTextNote projects={props.projects} newTextNote={props.newTextNote} setNewTextNote={props.setNewTextNote} addNewNote={props.addNewNote} newTextAlert={props.newTextAlert}/>
            </div>
            <div className="collapse" id="new-link-note"  data-bs-parent="#new-note-collapse-parent" >
                <NewLinkNote projects={props.projects} newLinkNote={props.newLinkNote} setNewLinkNote={props.setNewLinkNote} addNewNote={props.addNewNote} newLinkAlert={props.newLinkAlert}/>
            </div>
        </div>
    </div>

export default NewNote;