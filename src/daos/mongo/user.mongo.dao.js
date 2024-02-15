import BaseMongoDao from "./base.mongo.dao.js";
import userModel from "../../models/user.model.js";
export class UserMongoDao extends BaseMongoDao {
  constructor() {
    super(userModel);
  }

  async getUserByEmail(email) {
    try {
      console.log("3-user mongo dao");
      const user = await this.db.findOne(email);
      return user;
    } catch (err) {
      throw new Error(err);
    }
  }
}
