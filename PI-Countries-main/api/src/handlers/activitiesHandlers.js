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
  const {name, difficulty, length, season } = req.body;
    try {
      const newUser = await createActivity(name, difficulty, length, season);
      res.status(200).send(newUser);
    } catch (error) {
      res.status(400).json({error: error.message})
    }
};

module.exports = { getActivityHandler, postActivityHandler };