const NoteText = props =>
    <div className="card-body">            
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">{props.text}</p>
    </div>

export default NoteText;