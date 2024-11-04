import { externalApiService } from "@/services/external-api.service";
import { ApiError } from "@/utils/api-error";
import { Request, Response, NextFunction } from "express";

class ExternalAPIController {
  static async getData(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const data = await externalApiService.fetchData();
      res.json(data);
    } catch (err) {
      next(new ApiError(500, "Error fetching data from external API"));
    }
  }
}

export default ExternalAPIController;
