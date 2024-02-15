import { Router } from "express";
import {
  getAll,
  create,
  getOne,
  update,
  deleteOne,
} from "../controllers/project.controller.js";
import { isAuth } from "../middlewares/auth.middlewares.js";

const router = Router();

router.get("/", isAuth, getAll);
router.get("/:id", getOne);
router.post("/", create);
router.put("/:id", update);
router.delete("/:id", deleteOne);

export default router;
