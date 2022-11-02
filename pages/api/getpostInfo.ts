import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import {sanityClient} from "../../sanity"
import { postInfo } from "../../typings";


const query = groq `
    *[_type == "postInfo"] 
`;


type Data = {
    postinfo: postInfo;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
      
    const postinfo: postInfo = await sanityClient.fetch(query);
    res.status(200).json({ postinfo })
  }

  