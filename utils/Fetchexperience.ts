import {experience} from "../typings"


 export const Fetchexperience = async() => {

    const res = await fetch(`http://localhost:3000/api/getexperience`);

    const data = await res.json();

    const experience: experience[] = data.experiences;

    console.log(experience);
    console.log("display anything");
    

    return experience
    
}


