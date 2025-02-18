import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  followUnFollowUser,
  getSuggestedUsers,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserProfile);

router.get("/suggested", protectRoute, getSuggestedUsers);

router.post("/follow/:id", protectRoute, followUnFollowUser);

router.post("/update",protectRoute,updateUserProfile);

export default router;
