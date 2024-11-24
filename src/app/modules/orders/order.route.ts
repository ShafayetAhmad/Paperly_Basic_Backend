import express from "express";
import { createOrder, getRevenue } from "./order.controller";
import { validate } from "../../../middlewares/validateRequests";
import { orderSchema } from "./order.validation";
const orderRoutes = express.Router();
orderRoutes.post("/", validate(orderSchema), createOrder);

orderRoutes.get("/revenue", getRevenue);

export default orderRoutes;
