import data from '../data/data.js';
import NoteShell from '../components/NoteShell.js';

const App = () => {
    return (
        <div className="container">
            {
                Object.keys(data).map(project => {
                    console.log(project);
                    data[project].map((note, index) => {
                        console.log(note);
                        <NoteShell title={note.title} text={note.text} url={note.url} type={note.type}></NoteShell>
                    });                    
                })
            }
        </div>
    )
}

export default App;