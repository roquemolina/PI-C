const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountries = async (name) => {
  if(!name) return allCountries = await Country.findAll();
  const quer = name.toLowerCase();
  return await Country.findAll(
    {where:
      {name: {
        [Op.iLike]: `%${name}%`,
      }
    }});
}

const getCountryById = async (id) => {
  return await Country.findByPk(id, {
    include: [
      {
        model: Activity,
        attributes: ["countries"]
      }
    ]
  });
}

module.exports = { getCountries, getCountryById };