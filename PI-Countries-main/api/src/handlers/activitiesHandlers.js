const { createActivity, getActivity } = require("../controllers/activitiesControllers");

const getActivityHandler = async (req, res) => {
  try {
    const activity = await getActivity();
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const postActivityHandler = async (req, res) => {
  const {name, difficulty, length, season, countries } = req.body;
    try {
      if(countries.length === 0) throw new Error ('pal orto');
      const newActivity = await createActivity(name, difficulty, length, season, countries);
      res.status(200).json(newActivity);
    } catch (error) {
      res.status(400).json({error: error.message})
    }
};

module.exports = { getActivityHandler, postActivityHandler };