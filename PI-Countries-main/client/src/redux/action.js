import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const SEARCH_COUNTRIES = "SEARCH_COUNTRIES";
export const GET_DETAIL = "GET_DETAIL";
export const BY_CONTINENT = 'BY_CONTINENT';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

/* using thunk middleware to use  async axios method. Then, ----DISPATCH to the reducer--- to change redux global state */
/* dispatch  */
export const getCountries = () => {
  const endpoint = 'http://localhost:3001/countries';
  return async (dispatch) => {
     let {data} = await axios.get(endpoint);
        return dispatch({
           type: GET_COUNTRIES,
           payload: data,
        });
    };
};
export const getActivities = () => {
  const endpoint = 'http://localhost:3001/activities';
  return async (dispatch) => {
     let {data} = await axios.get(endpoint);
        return dispatch({
           type: GET_ACTIVITIES,
           payload: data,
        });
    };
};
export const getDetail = (id) => {
  const endpoint = `http://localhost:3001/countries/${id}`;
  return async (dispatch) => {
     let {data} = await axios.get(endpoint);
        return dispatch({
           type: GET_DETAIL,
           payload: data,
        });
    };
};
export const searchCountries = (countryName) => {
  const endpoint = 'http://localhost:3001/countries';
  return async (dispatch) => {
     let {data} = await axios.get(endpoint, {
      params: {
        name: countryName,
      }
    });
        return dispatch({
           type: SEARCH_COUNTRIES,
           payload: data,
        });
    };
};



export function getByContinent(continent) {
  return {
    type: BY_CONTINENT,
    payload: continent,
  }
};
export function getByPopulation(order) {
  return {
    type: ORDER,
    payload: order,
  }
};
export const createAct = (activity) => {
  const endpoint = 'http://localhost:3001/activities';
  return async (dispatch) => {
     let {data} = await axios.post(endpoint, activity);
      }
    }

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
     
    /* esto se hace con el Ctrl + . del quick fix q me desabilita ESlisnt! */
    // eslint-disable-next-line no-unused-vars
    let {data} = await axios.delete(endpoint)
     return dispatch({
      type: REMOVE_FAV,
      payload: id,
     });
    /* axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAV,
           payload: id,
     });
     }); */

  };
};

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender
  }
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order
  }
}