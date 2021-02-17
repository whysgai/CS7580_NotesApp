import { useState } from "react";
import data from '../data/data.js';
import Project from '../components/Project.js';
import NoteList from '../components/NoteList.js';
import ProjectFilter from '../components/ProjectFilter.js';



const App = () => {
    const [visibleProjects, viewProject] = useState([]);

    return (
        <div className="container">
            {console.log(visibleProjects)}
            <div className="row">
                <div className="col-3">
                    <ProjectFilter projects={data}/>
                </div>            
                <div className="col-9">
                    <NoteList projects={data}/>
                </div>
            </div>
        </div>
    )
}

export default App;