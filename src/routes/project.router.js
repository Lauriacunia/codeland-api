import { Router } from "express";
import {
  getAll,
  create,
  getOne,
  update,
  deleteOne,
} from "../controllers/project.controller.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteOne);

export default router;
