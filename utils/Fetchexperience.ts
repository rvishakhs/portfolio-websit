import {experience} from "../typings"
import { server } from "../config/index";


 export const Fetchexperience = async() => {

    const res = await fetch(`${server}/api/getexperience`);

    const data = await res.json();

    const experience: experience[] = data.experiences;

    console.log(experience);
    console.log("display anything");
    

    return experience
    
}




// import {experience} from "../typings"
// import { server } from "../config/index";


//  export const Fetchexperience = async() => {

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getexperience`);

//     const data = await res.json();

//     const experience: experience[] = data.experiences;

//     console.log(experience);
//     console.log("display anything");
    

//     return experience
    
// }


