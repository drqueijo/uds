import { ApiError } from "@/utils/api-error";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
};
