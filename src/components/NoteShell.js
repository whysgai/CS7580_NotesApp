import {NOTE_TYPE} from '../data/data.js'
import NoteText from './NoteText.js'

const NoteShell = props =>
    <div className="col gy-4">
        <div className="card">
           {
                props.type === NOTE_TYPE.TEXT &&
                    <NoteText title={props.title} text={props.text} />
           }
           {
                props.type === NOTE_TYPE.LINK &&
                    <NoteURL url={props.url} text={props.text} />
           }
        </div>
    </div>

export default NoteShell;