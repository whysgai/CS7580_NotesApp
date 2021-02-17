import {NOTE_TYPE} from '../data/data.js'
import NoteText from './NoteText.js'
import NoteURL from './NoteURL.js'

const NoteShell = props =>
    <div className="list-group-item">
        {
            props.type === NOTE_TYPE.TEXT &&
                <NoteText title={props.title} text={props.text} />
        }
        {
            props.type === NOTE_TYPE.LINK &&
                <NoteURL url={props.url} text={props.text} />
        }
    </div>

export default NoteShell;