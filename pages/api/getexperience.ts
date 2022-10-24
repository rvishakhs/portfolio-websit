import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import {sanityClient} from "../../sanity"
import { experience } from "../../typings";


const query = groq `
    *[_type == "experience"] 
`;


type Data = {
    experiences: experience[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
      
    const experiences: experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experiences })
  }

  