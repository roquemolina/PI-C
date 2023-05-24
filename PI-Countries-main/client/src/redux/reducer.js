import {  GET_COUNTRIES, GET_ACTIVITIES, SEARCH_COUNTRIES, GET_DETAIL, BY_CONTINENT, ORDER, SEARCH_ACTIVITIES, BY_NAME } from "./action";

const initialState = {
  countries: [],
  activities: [],
  displayedCountries: [],
  displayedActivities: [],
  searchQuery: [],
  countryDetail:{},
  byContinent:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
      case GET_COUNTRIES:
      return {
        ...state, 
        countries: action.payload,
        displayedCountries: action.payload
      }

      case GET_ACTIVITIES:
      return {
        ...state, 
        activities: action.payload,
        displayedActivities: action.payload
      }
      
      case SEARCH_COUNTRIES:
      return {
        ...state,
        searchQuery: state.countries.filter(el => el.name.toLowerCase().includes(action.payload.toLowerCase()))
      }

      case SEARCH_ACTIVITIES:
        return {
          ...state,
          searchQuery: state.activities.filter(el => el.name.toLowerCase().includes(action.payload.toLowerCase()))
      }

      case GET_DETAIL:
      return {
        ...state,
        countryDetail: action.payload
      }

      case BY_CONTINENT:
        switch (action.payload) {
          case "All":
            return {
              ...state,
              byContinent: [...state.countries]
            }
          case "Asia":
            return {
              ...state,
              byContinent: state.countries.filter(el => el.continent === action.payload)
            }
          case "South America":
            return {
              ...state,
              byContinent: state.countries.filter(el => el.continent === action.payload)
            }
          case "North America":
            return {
              ...state,
              byContinent: state.countries.filter(el => el.continent === action.payload)
            }
          case "Oceania":
            return {
              ...state,
              byContinent: state.countries.filter(el => el.continent === action.payload)
            }
          case "Antarctica":
            return {
              ...state,
              byContinent: state.countries.filter(el => el.continent === action.payload)
            }
          case "Africa":
            return {
              ...state,
              byContinent: state.countries.filter(el => el.continent === action.payload)
            }
          case "Europe":
            return {
              ...state,
              byContinent: state.countries.filter(el => el.continent === action.payload)
            }
            default:
              return {
                ...state
              }
      }
        case ORDER:
          const newCha = [...state.countries];
          if(action.payload === 'A') {
            return {
              ...state,
               countries: state.countries.toSorted((a, b) => a.population - b.population)
               /*
               -----myFavorites: state.allCharacters.sort((a, b) => a.id - b.id)--- MALLL! MODIFICA EL ESTADO PORQUE NO DA UN
               NUEVO ARRAY!
  
              NO SE PUEDE USAR directamente el sort, o puedo usar el toSorted() xq me modificaEL STATE.ALLCHARACTER array, 
              en el filter de arriba se puede porque me da un nuevo array, el sort me modifica el 
              array del estado global. POR ESO NO LO USO DE UNA
              SI LO QUIERE USAR DE UNA PODRÍA USAR UN toSorted();*/
              /* myFavorites: newCha.sort((a, b) => a.id - b.id) */
           }
          } else {
            return {
              ...state,
              countries: newCha.sort((a, b) => b.population - a.population)
            }
          }
        case BY_NAME:
          const sorted = [...state.countries];
          if(action.payload === 'AZ') {
            return {
              ...state,
               /* countries: state.countries.toSorted((a, b) => a.population - b.population) */
               countries: state.countries.toSorted((a, b) => {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0;
            })
               /*
               -----myFavorites: state.allCharacters.sort((a, b) => a.id - b.id)--- MALLL! MODIFICA EL ESTADO PORQUE NO DA UN
               NUEVO ARRAY!
  
              NO SE PUEDE USAR directamente el sort, o puedo usar el toSorted() xq me modificaEL STATE.ALLCHARACTER array, 
              en el filter de arriba se puede porque me da un nuevo array, el sort me modifica el 
              array del estado global. POR ESO NO LO USO DE UNA
              SI LO QUIERE USAR DE UNA PODRÍA USAR UN toSorted();*/
              /* myFavorites: newCha.sort((a, b) => a.id - b.id) */
           }
          } else {
            return {
              ...state,
              /* countries: sorted.sort((a, b) => b.population - a.population) */
              countries: sorted.sort((a, b) => {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            })
            }
          }
      /* case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(el => el.id !== action.payload),
        myFavorites: state.myFavorites.filter(el => el.id !== action.payload)
      } */
      default:
        return {
          ...state
        }
  }
};

export default rootReducer;