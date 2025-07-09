import { useState, useEffect} from "react";

function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect( () => {
        setTimeout( () => {
            setProjects([
                { id: 1, title:"react website",image:"/reactwebsite.jpeg"},
                { id: 1, title:"To do app",image:"/todoapp.jpeg"},
                { id: 1, title:"Blog app",image:"/blog.jpeg"},
                { id: 1, title:"Expense tracker",image:"/expense.jpeg"},
            ]);
        }, 1000);

    }, []);

    return (
        <div>
            <h2 className="h2">My Projects</h2>
            {projects.length===0 ?(
                <p>Loading projects...</p>
            ) : (
                <div className="grid">
                    {projects.map((proj) => (
                        <div className="grid-item">
                                <img src={proj.image} alt={proj.title} width="100%"/>
                                <h3>{proj.title}</h3>
                        </div>



                    ))}
                </div>


            )}
        </div>
    );
}

export default Projects;