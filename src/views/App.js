import { useState } from "react";
import _ from 'lodash';
import data from '../data/data.js';
import { NOTE_TYPE } from '../data/data.js'
import Project from '../components/Project.js';
import NewNote from '../components/NewNote.js'
import NoteList from '../components/NoteList.js';
import ProjectFilterList from '../components/ProjectFilterList.js';



const App = () => {
    const [projects, setProjects] = useState(data);
    const [visibleProjects, setVisible] = useState([]);
    const [newProject, setNewProject] = useState("");
    const [projectAlert, setProjectAlert] = useState(false);
    const [newTextNote, setNewTextNote] = useState({
        type: NOTE_TYPE.TEXT,
        title: "",
        text: ""
    });
    const [newTextAlert, setNewTextAlert] = useState(false);
    const [newLinkNote, setNewLinkNote] = useState({
        type: NOTE_TYPE.LINK,
        url: "",
        text: ""
    });
    const [newLinkAlert, setNewLinkAlert] = useState(false);

    const updateProjectFilter = project => {
        console.log("Filtering project:", project);
        let newProjects;
        if (!visibleProjects.includes(project)) {
            newProjects = visibleProjects.map((project, index) => {
                return project;
            })
            newProjects.push(project);
        } else {
            newProjects = visibleProjects.filter( item => item !== project);
        }
        console.log("New projects:", newProjects);
        setVisible(newProjects);
    }

    const addNewProject = () => {
        console.log("New project title: " + newProject);
        if (!projects.hasOwnProperty(newProject)) {
            let newProjects = _.cloneDeep(projects);
            newProjects[newProject] = [];
            setProjects(newProjects);
            setNewProject("");
        } else {
            setProjectAlert(true);
            window.setTimeout(() => {
                setProjectAlert(false);
            }, 10000);
        }
        
    }

    const addNewNote = (project, note) => {
        if (note.type === NOTE_TYPE.TEXT) {
            if (note.title !== "" || note.text !=="") {
                console.log("Add new note", note, " to project ", project);
                let newProjects = _.cloneDeep(projects);
                newProjects[project].push(note);
                console.log(newProjects);
                setProjects(newProjects);
                setNewTextAlert(false);
            } else {
                setNewTextAlert(true);
                window.setTimeout(() => {
                    setNewTextAlert(false);
                }, 10000);
            }
        } else if (note.type === NOTE_TYPE.LINK) {
            if (note.url !== "") {
                console.log("Add new note", note, " to project ", project);
                let newProjects = _.cloneDeep(projects);
                newProjects[project].push(note);
                console.log(newProjects);
                setProjects(newProjects);
                setNewLinkAlert(false);
            } else {
                setNewLinkAlert(true);
                window.setTimeout(() => {
                    setNewLinkAlert(false);
                }, 10000);
            }
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="project-filter">
                    <ProjectFilterList 
                        projects={projects}
                        visibleProjects={visibleProjects}
                        updateProjectFilter={updateProjectFilter}
                        newProject={newProject}
                        setNewProject={setNewProject}
                        addNewProject={addNewProject}
                        projectAlert={projectAlert}
                    />
                </div>            
                <div className="note-list">
                    <NewNote projects={projects}
                        newTextNote={newTextNote}
                        setNewTextNote={setNewTextNote}
                        newLinkNote={newLinkNote}
                        setNewLinkNote={setNewLinkNote}
                        addNewNote={addNewNote}
                        newTextAlert={newTextAlert}
                        newLinkAlert={newLinkAlert}
                    /> 
                    <NoteList projects={projects} visibleProjects={visibleProjects}/>
                </div>
            </div>
        </div>
    )
}

export default App;