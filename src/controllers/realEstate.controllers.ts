import { Request, Response } from "express";
import { realEstateServices } from "../services";
import { RealEstate } from "../entities";
import { RealEstateRead } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const realEstate: RealEstate = await realEstateServices.create(req.body);
  return res.status(201).json(realEstate);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstatesRead: RealEstateRead = await realEstateServices.read();

  return res.status(200).json(realEstatesRead);
};

export default { create, read };
