const NewTextNote = props =>
    <div className="card card-body">            
        <h3 className="card-title">New Note</h3>
        <label>Project: </label>
        <select>
            <option>Hi!</option>
        </select>
        <label>Title:</label>
        <input type="text"></input>
        <label>Text:</label>
        <textarea type="textarea"></textarea>
    </div>

export default NewTextNote;