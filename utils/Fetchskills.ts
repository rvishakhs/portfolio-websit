import { server } from "../config";
import {skill} from "../typings"


export const Fetchskills = async() => {

    const res = await fetch(`${server}/api/getSkills`);

    const data = await res.json()

    const skills: skill[] = data.skills

    return skills
    
}


// import {skill} from "../typings"


// export const Fetchskills = async() => {

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

//     const data = await res.json()

//     const skills: skill[] = data.skills

//     return skills
    
// }