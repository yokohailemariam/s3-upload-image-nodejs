import { Router } from "express";

import { uploadImage, upload } from "../controller/uploadController";

const s3Router = Router();

s3Router.post("/upload", upload.single("image"), uploadImage);

export default s3Router;
