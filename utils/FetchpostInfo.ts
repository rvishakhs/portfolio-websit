import {postInfo} from "../typings"
import { server } from "../config/index";



export const FetchpostInfo = async() => {

    const res = await fetch(`${server}/api/getpostInfo`);

    const data = await res.json()

    const postInfo: postInfo[] = data.postinfo

    console.log(postInfo);
    

    return postInfo
    
}






// import {postInfo} from "../typings"



// export const FetchpostInfo = async() => {

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getpostInfo`);

//     const data = await res.json()

//     const postInfo: postInfo[] = data.postinfo

//     console.log(postInfo);
    

//     return postInfo
    
// }


