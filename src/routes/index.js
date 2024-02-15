import { Router } from "express";
import authRouter from "./auth.router.js";
import projectRouter from "./project.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/projects", projectRouter);

export default router;
