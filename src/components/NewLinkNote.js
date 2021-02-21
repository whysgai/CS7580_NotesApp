import { NO_PROJECT } from '../data/data.js'

const NewLinkNote = props =>
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
        <label>URL:</label>
        <input type="url"></input>
        <label>Text:</label>
        <input type="text"></input>
    </div>

export default NewLinkNote;