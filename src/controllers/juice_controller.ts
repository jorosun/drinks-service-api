import { Request, Response } from "express";
import * as juiceService from "../services/juice_service";
export const getJuice = async (
  req: Request<object, object, object, { juiceName: string | undefined }>,
  res: Response
) => {
  const juiceName = req.query.juiceName;
  const juice = juiceService.getJuice(juiceName);
  res.json(juice).status(200);
};
