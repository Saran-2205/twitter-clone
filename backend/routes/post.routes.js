import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createComment, createPost, deletePost, getAllPosts, getFollowingPosts, getLikedPosts, getUserPosts, likeUnlikePost } from '../controllers/post.controller.js';

const router = express.Router();

router.get("/all",protectRoute,getAllPosts);
router.get("/following",protectRoute,getFollowingPosts);
router.get("/likes/:id",protectRoute,getLikedPosts);
router.get("/user/:username",protectRoute,getUserPosts);
router.post("/create",protectRoute,createPost);
router.post("/comment/:id",protectRoute,createComment);
router.post("/like/:id",protectRoute,likeUnlikePost);
router.delete("/:id",protectRoute,deletePost);


export default router;