import express from "express";
import "dotenv/config";
import s3Router from "./routes/s3Route";

const app = express();

app.use("/api/s3", s3Router);

app.listen(4000, () =>
  console.log(`🚀 Server running at: http://localhost:4000`)
);
