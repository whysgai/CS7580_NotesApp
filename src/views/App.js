import { useState } from "react";
import data from '../data/data.js';
import Project from '../components/Project.js';
import NoteList from '../components/NoteList.js';
import ProjectFilter from '../components/ProjectFilter.js';



const App = () => {
    const [projects, setProjects] = useState(data);
    const [visibleProjects, setVisible] = useState([]);

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

    return (
        <div className="container">            
            <div className="row">
                <div className="project-filter">
                    <ProjectFilter projects={projects} visibleProjects={visibleProjects} updateProjectFilter={updateProjectFilter}/>
                </div>            
                <div className="note-list">
                    <NoteList projects={projects} visibleProjects={visibleProjects}/>
                </div>
            </div>
        </div>
    )
}

export default App;