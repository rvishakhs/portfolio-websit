import {postInfo} from "../typings"


export const FetchpostInfo = async() => {

    const res = await fetch(`http://localhost:3000/api/getpostInfo`);

    const data = await res.json()

    const postInfo: postInfo[] = data.postinfo

    console.log(postInfo);
    

    return postInfo
    
}

