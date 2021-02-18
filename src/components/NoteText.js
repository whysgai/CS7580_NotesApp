const NoteText = props =>
    <div className="card-body">            
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.text}</p>
    </div>

export default NoteText;