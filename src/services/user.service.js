import { BaseService } from "./base.service.js";
import getDAOS from "../daos/daos.factory.js";
const { userDao } = getDAOS();

export class UserService extends BaseService {
  constructor() {
    super(userDao);
  }

  async getUserByEmail(email) {
    return await this.dao.getUserByEmail(email);
  }
}

const userService = new UserService();
export default userService;
