import data from "../data/data";
import { NO_PROJECT } from '../data/data.js'

const NewTextNote = props =>
    <div className="card card-body">            
        <h3 className="card-title">New Note</h3>
        <label>Project: </label>
        <select>
            <option value={NO_PROJECT}>--No Project--</option>
            {
                Object.keys(props.projects).map((project, index) =>
                    <option key={index}>{project}</option>                
                )
            }                      
        </select>
        <label>Title:</label>
        <input type="text" onChange={e => props.setNewTextNote({...props.newTextNote, title : e.target.value})}></input>
        <label>Text:</label>
        <textarea type="textarea" onChange={e => props.setNewTextNote({...props.newTextNote, text : e.target.value})}></textarea>
    </div>

export default NewTextNote;