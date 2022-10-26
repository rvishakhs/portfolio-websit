import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import {sanityClient} from "../../sanity"
import { project, } from "../../typings";


const query = groq `
    *[_type == "project"] 
`;


type Data = {
    project: project[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
      
    const project: project[] = await sanityClient.fetch(query);
    res.status(200).json({ project })
  }

  