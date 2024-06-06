import { Router } from "express";
import { getPhotos, getPhotosById } from "../controllers/photo.controller";


const router = Router();

router.get("/photos",getPhotos)
router.get("/photos/:id",getPhotosById)

export default router