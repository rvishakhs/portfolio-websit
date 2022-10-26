import {experience} from "../typings"


export const Fetchexperience = async() => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getexperience`);

    const data = await res.json()

    const experience: experience[] = data.experience

    console.log(experience);
    

    return experience
    
}


