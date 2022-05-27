import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";
import { IService } from "../../type";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IService[]>
) {
  // bu default get request
  console.log(services);

  res.status(200).json({ services });
}
