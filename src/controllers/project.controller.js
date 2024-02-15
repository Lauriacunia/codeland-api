import { ProjectService } from "../services/project.service.js";
const projectService = new ProjectService();

class ProjectController {
  async getAll(req, res) {
    try {
      const projects = await projectService.getAll();
      projects
        ? res.status(200).json({
            status: "success",
            payload: projects,
          })
        : res.status(200).json({ status: "success", payload: [] });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async getOne(req, res) {
    try {
      const id = req.params.id;
      const project = await projectService.getOne(id);
      project
        ? res.status(200).json({
            status: "success",
            payload: project,
          })
        : res.status(404).json({
            status: "error",
            message: "Sorry, no project found by id: " + id,
            payload: {},
          });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async create(req, res) {
    try {
      const projectCreated = await projectService.create(req.body);
      res.status(201).json({
        status: "success",
        payload: projectCreated,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const projectUpdated = await projectService.update(id, req.body);
      res.status(200).json({
        status: "success",
        payload: projectUpdated,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
  async deleteOne(req, res) {
    try {
      const id = req.params.id;
      const projectDeleted = await projectService.delete(id);
      res.status(200).json({
        status: "success",
        payload: projectDeleted,
      });
    } catch (err) {
      res.status(err.status || 500).json({
        status: "error",
        payload: err.message,
      });
    }
  }
}

const projectController = new ProjectController();
const { getAll, getOne, create, update, deleteOne } = projectController;

export { getAll, getOne, create, update, deleteOne };
