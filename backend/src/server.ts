import express, { Application } from "express";
import cors from "cors";
import routes from "./routes";
import { errorHandler } from "@/middlewares/error-handler.middleware";

const app: Application = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("running on port:", PORT);
});
