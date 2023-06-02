//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require('dotenv').config();
const server = require('./src/app.js');
const { conn, Country, Activity } = require('./src/db.js');
const axios = require("axios");
const downloadedData = require('./src/assets/countries.json');
const bulkData = require('./src/assets/activitiesBulk.json');
const {createActivity} = require("./src/controllers/activitiesControllers.js");
const PORT = process.env.PORT || 3001;

// ENDPOINT
/* https://restcountries.com/v3/all */

// Syncing all the models at once.
/* conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {
    const allCountries = await Country.findAll();
    console.log(allCountries.length);

    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
}); */

conn.sync({ force: true }).then(() => {
  /* force true new db each op */
  server.listen(3001, async () => {
    const allCountries = Country.findAll();
    if(!allCountries.length){
      /* const apiCountriesResponse = await axios.get('https://restcountries.com/v3/all'); */
      let apiCountries = downloadedData.map((e) => {
        //return xq es mas de 1 linea https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        return {
          id: e.cca3,
          name: e.name.common,
          image: e.flags[0],
          continent: e.continents[0],
          capital: e.capital ? e.capital[0] : 'Not found',
          subregion: e.subregion,
          area: e.area,
          population: e.population
        }
      })
      await Country.bulkCreate(apiCountries);
      console.log('Countries created');

      const allActivities = Activity.findAll();
      if(!allActivities.length){
        let activitiesBulkData = bulkData.map((e) => {
          return {
            name: e.name,
            difficulty: e.difficulty,
            length: e.length,
            season: e.season,
            countries: e.countries
          }
        })

        activitiesBulkData.forEach(e => {
          createActivity(e.name, e.difficulty, e.length, e.season, e.countries)
        })
        console.log('Activities created');
      }
    }
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  
  
  });
});
