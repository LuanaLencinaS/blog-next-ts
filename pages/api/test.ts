import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.id;

  return res.status(200).json({ slug });
};
