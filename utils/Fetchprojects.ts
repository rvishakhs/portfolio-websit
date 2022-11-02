import {project} from "../typings"


export const Fetchprojects = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getprojects`);

    const data = await res.json()

    const projects: project[] = data.project

    

    return projects
    
}


