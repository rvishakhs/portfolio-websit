import {project} from "../typings"


export const Fetchprojects = async() => {

    const res = await fetch(`http://localhost:3000/api/getprojects`);

    const data = await res.json()

    const projects: project[] = data.project

    console.log(projects);
    

    return projects
    
}


