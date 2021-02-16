import data from '../data/data.js';
import Project from '../components/Project.js';


const App = () => {
    return (
        <div className="container">
            {
                Object.keys(data).map((project, index) => 
                    // console.log(project);
                    <Project key={index} name={project} notes={data[project]}/>
                    // data[project].map((note, index) => {
                    //     console.log(note);
                        
                    // });                    
                )
            }
        </div>
    )
}

export default App;