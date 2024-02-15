import { BaseService } from "./base.service.js";
import getDAOS from "../daos/daos.factory.js";
const { projectDao } = getDAOS();

export class ProjectService extends BaseService {
  constructor() {
    super(projectDao);
  }
}
