import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import {sanityClient} from "../../sanity"
import { project, } from "../../typings";


const query = groq `
    *[_type == "projects"] 
`;


type Data = {
    projects: project[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
      
    const projects: project[] = await sanityClient.fetch(query);
    res.status(200).json({ projects })
  }

  