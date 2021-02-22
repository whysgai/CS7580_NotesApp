import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const NewProject = props =>
    <div className="list-group-item">
        <label className="form-label" htmlFor="new-project-input">New Project</label>
        <div className="input-group">
            <input type="text" className="form-control" id="new-project-input"
                placeholder="Project title..."
                value={props.newProject}
                onChange={e => props.setNewProject(e.target.value)}
            />
            <button className={`btn btn-primary ${props.newProject === "" ? "disabled" : ""}`} type="button" 
                onClick={props.addNewProject}
            >
                <span className="visually-hidden">Add New Project</span>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            {
                props.projectAlert ?
                    <div className="alert alert-warning" role="alert">
                        A project with that name already exists.
                    </div>
                : ""
            }
        </div>
    </div>

export default NewProject
