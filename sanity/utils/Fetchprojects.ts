import {projects} from "../typings"


export const Fetchprojects = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getprojects`);

    const data = await res.json()

    const projects: projects[] = data.projects

    console.log(projects);
    

    return projects
    
}


