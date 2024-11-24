import { NextFunction, Request, Response } from "express";
import config from "../app/config";

export const errorHandler = (
  err: Error & { statusCode?: number; error?: any },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    success: false,
    error: err.error || err,
    stack: config.node_env === "development" ? err.stack : undefined,
  });
};
