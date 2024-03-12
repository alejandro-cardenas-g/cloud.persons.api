import dbContext from "./dbContext.js";

class PersonsService {
  getPersons() {
    return dbContext.findAll();
  }

  createPerson({ name, age }) {
    return dbContext.createOne({ name, age });
  }
}

export default new PersonsService();
