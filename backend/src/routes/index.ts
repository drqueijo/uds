import ExternalAPIController from "@/controllers/external-api.controller";
import { Router } from "express";

const router = Router();

router.get("/data", ExternalAPIController.getData);

export default router;
