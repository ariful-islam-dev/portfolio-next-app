import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";
import { IService } from "../../type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IService[]>
) {
  res.status(200).json({ services });
}
