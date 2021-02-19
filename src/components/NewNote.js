import NewTextNote from './NewTextNote.js';

const NewNote = props =>
    <div className="">            
        <button type="button" className="btn btn-primary col-12">New Note</button>
        <div className="btn-group col-12">
            <button type="button" className="btn btn-outline-dark">Link Note</button>
            <button type="button" className="btn btn-outline-dark">URL Note</button>
        </div>
        <div>
            <NewTextNote/>
        </div>
    </div>

export default NewNote;