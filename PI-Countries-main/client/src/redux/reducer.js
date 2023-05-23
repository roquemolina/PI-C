import { GET_COUNTRIES, GET_ACTIVITIES, SEARCH_COUNTRIES, GET_DETAIL, BY_CONTINENT, FILTER, ORDER, REMOVE_FAV } from "./action";

const initialState = {
  countries: [],
  activities: [],
  displayedCountries: [],
  displayedActivities: [],
  searchQuery: [],
  countryDetail:{}
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
        searchQuery: action.payload
      }
      case GET_DETAIL:
      return {
        ...state,
        countryDetail: action.payload
      }
      case BY_CONTINENT:
        if(action.payload === 'ALL') {
          return {
            ...state,
            byContinent: [...state.countries] 
          }
        } else if (action.payload === 'Africa') {
          return {
            ...state,
            byContinent: state.countries.filter(el => el.continent === action.payload)
          }
        }
        break;
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
      case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(el => el.id !== action.payload),
        myFavorites: state.myFavorites.filter(el => el.id !== action.payload)
      }
      case FILTER:
        if(action.payload === 'def') {
          return {
            ...state,
            myFavorites: [...state.allCharacters]
          }
        } else {
          return {
            ...state,
            myFavorites: state.allCharacters.filter(el => el.gender === action.payload)
          }
        }
      default:
        return {
          ...state
        }
  }
};

export default rootReducer;