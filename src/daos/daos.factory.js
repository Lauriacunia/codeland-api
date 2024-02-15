import CONFIG from "../config/config.js";

let userDao;
let projectDao;

switch (CONFIG.DATASOURCE) {
  case "MYSQL": {
    // TODO: conection
    break;
  }
  case "MONGO": {
    const { UserMongoDao } = await import("./mongo/user.mongo.dao.js");
    userDao = new UserMongoDao();
    const { ProjectMongoDao } = await import("./mongo/project.mongo.dao.js");
    projectDao = new ProjectMongoDao();
    break;
  }
  default: {
    throw new Error("Error. DATASOURCE is requiered");
  }
}

const getDAOS = () => {
  return {
    userDao,
    projectDao,
  };
};

export default getDAOS;
