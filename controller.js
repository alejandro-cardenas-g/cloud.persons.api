import personService from "./service.js";

export const getPerson = async (req, res) => {
  return res.status(200).json(personService.getPersons());
};

export const createPerson = async (req, res) => {
  const { name, age } = req.body;
  return res.status(200).json(personService.getPersons({ name, age }));
};
