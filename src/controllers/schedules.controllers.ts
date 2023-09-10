import { Request, Response } from "express";
import { schedulesServices } from "../services";
import { ScheduleReadRealEstate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { sub } = res.locals.decoded;
  const shedule: string = await schedulesServices.create(req.body, sub);
  return res.status(201).json({ message: shedule });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const realEstateId: number = Number(req.params.id);
  const schedule:ScheduleReadRealEstate = await schedulesServices.read(realEstateId);

  return res.status(200).json(schedule);
};

export default { create, read };
