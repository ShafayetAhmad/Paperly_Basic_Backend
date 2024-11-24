import { Request, Response, NextFunction } from "express";
import { createOrderService, getRevenueService } from "./order.service";
import { generateResponse } from "../../../utils/generateResponse";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await createOrderService(req.body);
    res
      .status(201)
      .json(generateResponse("Order created successfully", true, order));
  } catch (err) {
    next(err);
  }
};

export const getRevenue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const totalRevenue = await getRevenueService();
    res.status(200).json(
      generateResponse("Revenue calculated successfully", true, {
        totalRevenue,
      })
    );
  } catch (err) {
    next(err);
  }
};
