import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { deleteAllNotifications, getNotifications } from "../controllers/notification.controller.js";

const router=express.Router();

router.get("/",protectRoute,getNotifications);
router.delete("/",protectRoute,deleteAllNotifications);

export default router;