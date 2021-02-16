import {NOTE_TYPE} from '../data/data.js'

const NoteShell = props =>
    <div className="col gy-4">
        <div className="card">
           {
                props.type === NOTE_TYPE.TEXT &&
                    <p>Text</p>
           }
           {
                props.type === NOTE_TYPE.LINK &&
                    <p>Link</p>
           }
            <div className="card-body">            
                <h2 className="card-title">{props.title}</h2>
                <h3 className="card-text">{props.species}</h3>
                <p className="card-text">{props.age}</p>
            </div>
        </div>
    </div>

export default NoteShell;