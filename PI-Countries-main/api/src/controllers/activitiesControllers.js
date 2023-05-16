//controllers manipulate models from db
const {Activity, Country} = require("../db");

const getActivity = async () => {
  return await Activity.findAll({
    
    include:[
      {
        model: Country,
        attributes: ["id"]}
    ]
  });
}
const createActivity = async (name, difficulty, length, season, countries) => {
  const newActivity = await Activity.create({name, difficulty, length, season});
  await newActivity.addCountries(countries);
  return newActivity;
}

module.exports = { createActivity, getActivity }