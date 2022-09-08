import express from "express";
import { addTunel } from "../controllers/addTunel.js";
import { editTunel } from "../controllers/editTunel.js";
import getCookies from '../controllers/getCookies.js'
import { getSingleTunel } from "../controllers/getSingleTunel.js";
import { getTunels } from "../controllers/getTunels.js";
import { deleteTunel } from "../controllers/deleteTunel.js";
const router = express.Router()

router.post('/', getCookies, addTunel)
router.put('/:id', getCookies, editTunel)
router.delete('/:id', getCookies, deleteTunel)
router.get('/:id', getSingleTunel)
router.get('/', getTunels)

export default router;