import BaseMongoDao from "./base.mongo.dao.js";
import projectModel from "../../models/project.model.js";

export class ProjectMongoDao extends BaseMongoDao {
  constructor() {
    super(projectModel);
  }
}
