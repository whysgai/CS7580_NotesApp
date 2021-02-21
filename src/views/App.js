import { useState } from "react";
import _ from 'lodash';
import data from '../data/data.js';
import Project from '../components/Project.js';
import NewNote from '../components/NewNote.js'
import NoteList from '../components/NoteList.js';
import ProjectList from '../components/ProjectList.js';



const App = () => {
    const [projects, setProjects] = useState(data);
    const [visibleProjects, setVisible] = useState([]);
    const [newProject, setNewProject] = useState("");

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
        let newProjects = _.cloneDeep(projects);
        newProjects[newProject] = [];
        setProjects(newProjects);
    }

    return (
        <div className="container">            
            <div className="row">
                <div className="project-filter">
                    <ProjectList 
                        projects={projects}
                        visibleProjects={visibleProjects}
                        updateProjectFilter={updateProjectFilter}
                        newProject={newProject}
                        setNewProject={setNewProject}
                        addNewProject={addNewProject}
                    />
                </div>            
                <div className="note-list">
                    <NewNote/> 
                    <NoteList projects={projects} visibleProjects={visibleProjects}/>
                </div>
            </div>
        </div>
    )
}

export default App;