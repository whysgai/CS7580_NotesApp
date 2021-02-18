const NoteLink = props =>
    <div className="card-body">            
        <a className="card-title" href={props.url}><h3>{props.text != "" ? props.text : props.url}</h3></a>
    </div>

export default NoteLink;