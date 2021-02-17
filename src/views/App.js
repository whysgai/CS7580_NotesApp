import data from '../data/data.js';
import Project from '../components/Project.js';
import NoteList from '../components/NoteList.js'



const App = () => {
    return (
        <div className="container">
            <div>
                <div className="col-3 bg-dark"></div>            
                <div className="col-9">
                    <NoteList notes={data}/>
                    {/* {
                        Object.keys(data).map((project, index) => 
                            <Project key={index} name={project} notes={data[project]}/>                
                        )
                    } */}
                </div>
            </div>
        </div>
    )
}

export default App;