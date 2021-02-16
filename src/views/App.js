import data from '../data/data.js';
import NoteShell from '../components/NoteShell.js';

const App = () => {
    return (
        <div className="container">
            {

                    data["Learn React"].map((note, index) =>
                        <NoteShell key={index} title={note.title} text={note.text} url={note.url} type={note.type}/>
                    )                    
                
            }
        </div>
    )
}

export default App;