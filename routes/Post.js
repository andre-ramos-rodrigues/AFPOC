import express from "express";
import { addPost } from "../controllers/addPost.js";
import { deletePost } from "../controllers/deletePost.js";
import { editPost } from "../controllers/editPost.js";
import getCookies from '../controllers/getCookies.js'
import { getPosts } from "../controllers/getPosts.js";
import { getSinglePost } from "../controllers/getSinglePost.js";
const router = express.Router()

router.post('/', addPost)
router.put('/:id', editPost)
router.delete('/:id', deletePost)
router.get('/:id', getSinglePost)
router.get('/', getPosts)

export default router;