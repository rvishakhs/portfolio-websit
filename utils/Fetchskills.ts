import {skill} from "../typings"


export const Fetchskills = async() => {

    const res = await fetch(`http://localhost:3000/api/getSkills`);

    const data = await res.json()

    const skills: skill[] = data.skills

    console.log(skills);

    return skills
    
}