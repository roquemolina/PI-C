//controllers manipulate models from db
const {Activity} = require("../db");

const getActivity = async () => {
  return await Activity.findAll();
}
const createActivity = async (name, difficulty, length, season) => {
  return await Activity.create({name, difficulty, length, season});
}

module.exports = { createActivity, getActivity }