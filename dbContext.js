import { v4 } from "uuid";

class PersonsDbContext {
  persons = [
    { id: v4(), name: "carlos", age: 44 },
    { id: v4(), name: "Andrea", age: 22 },
    { id: v4(), name: "Viviana", age: 33 },
  ];

  findAll() {
    return this.persons;
  }

  createOne({ name, age }) {
    const newPerson = { id: v4(), name, age };
    this.persons.push(newPerson);
    return newPerson;
  }
}

export default new PersonsDbContext();
