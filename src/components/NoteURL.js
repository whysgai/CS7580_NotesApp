const NoteLink = props =>
    <div className="card-body">            
        <a className="card-title" href={props.url}>{props.text}</a>
    </div>

export default NoteLink;