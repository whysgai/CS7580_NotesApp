const NoteLink = props =>
    <div className="card-body">            
        <a className="card-title" href={props.url}>{props.text != "" ? props.text : props.url}</a>
    </div>

export default NoteLink;