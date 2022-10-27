import {experience} from "../typings"


export const Fetchexperience = async() => {

    const res = await fetch(`http://localhost:3000/api/getexperience`);

    const data = await res.json()

    const experience: experience[] = data.experience

    console.log(experience);
    

    return experience
    
}


