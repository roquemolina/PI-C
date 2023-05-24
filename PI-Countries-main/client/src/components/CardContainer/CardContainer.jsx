import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCountries, getActivities, getByContinent, getByPopulation, searchCountries, searchActivities } from "../../redux/action";
import paginate from "../../helpers/paginate";
import SearchForm from "../SearchForm/SearchForm";

const CardContaner = () => {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getCountries());
      dispatch(getActivities());
   }, [dispatch]);
   
   
   const countries = useSelector((state) => state.countries);
   const activities = useSelector((state) => state.activities);
   const searchQuery = useSelector((state) => state.searchQuery);
   const [displayed, setDisplayed] = useState([]);
   const [displayedObj, setDisplayedObj] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [maxPage, setMaxPage] = useState(null);
   let pagination = paginate(countries);
   
   const byContinent = useSelector((state) => state.byContinent);
   
   useEffect(() => {
      setDisplayed(pagination.items);
      setMaxPage(pagination.totalPages);
      setDisplayedObj(countries);
   }, [countries]);

   const putActivities = (event) => {
      if(event.target.id === "get-activities") {
         setCurrentPage(1);
         setDisplayedObj(activities);
         pagination = paginate(activities);
         setDisplayed(pagination.items);
         setMaxPage(pagination.totalPages);
      }
      if(event.target.id === "get-countries") {
         setCurrentPage(1);
         setDisplayedObj(countries);
         pagination = paginate(countries);
         setDisplayed(pagination.items);
         setMaxPage(pagination.totalPages);
      }
   }

   const putQuery = (name, option) => {
      if(option === "country"){
         dispatch(searchCountries(name));
      } else {
         dispatch(searchActivities(name));
      }
   }
   useEffect(() => {
      setCurrentPage(1);
      setDisplayedObj(searchQuery);
      pagination = paginate(searchQuery);
      setDisplayed(pagination.items);
      setMaxPage(pagination.totalPages);
      
    }, [searchQuery])
   
   
   const handlePages = (event) => {
   if(event.target.id === "prev-btn") {
      if(currentPage === 1) return;
      pagination = paginate(displayedObj, currentPage -1);
      setCurrentPage(currentPage - 1)
      setDisplayed(pagination.items);
   }
   if(event.target.id === "next-btn") {
      if(currentPage === maxPage) return;
      setCurrentPage(currentPage + 1);
      pagination = paginate(displayedObj, currentPage + 1);
      setDisplayed(pagination.items);
   };
};
const byContinents = (event) => {
   if(event.target.id === 'byCont') {
      dispatch(getByContinent('ALL'));
   }
   if(event.target.id === 'byCont2') {
      dispatch(getByContinent('Africa'));
   }
}
const byPopulatioin = (event) => {
   if(event.target.id === 'byPop') {
      dispatch(getByPopulation('A'));
   }
   if(event.target.id === 'byPop2') {
      dispatch(getByPopulation());
   }
}

  return ( 
    <div>
      <h2>Card conteiners</h2>
      <h2>Muchos card</h2>
      <SearchForm putQuery={putQuery}/>
      <div>
         <button id="prev-btn" onClick={handlePages}>prev</button>
         <button id="next-btn" onClick={handlePages}>next</button>
         <button id="get-activities" onClick={putActivities}>Get Act</button>
         <button id="get-countries" onClick={putActivities}>Get Cuontries</button>
         <button id="byCont" onClick={(event) => byContinents(event)}>CONTTTT</button>
         <button id="byCont2" onClick={(event) => byContinents(event)}>CONTTTT</button>
         <button id="byPop" onClick={(event) => byPopulatioin(event)}>POP1</button>
         <button id="byPop2" onClick={(event) => byPopulatioin(event)}>POP2</button>
      </div>

      <div>
         
      </div>

      {displayed.map(({id, name, image, continent, capital, subregion, area, population}) => (
            //e desestructurado
            <Card 
               key={id}
               id={id}
               name={name}
               image={image}
               continent={continent}
               capital={capital}
               subregion={subregion}
               area={area}
               population={population}
            />
            )
         )}
    </div>
   );
}
export default CardContaner;