const Card = ({id, name, image, continent, capital, subregion, area, population}) => {
  return ( 
    <div >
      <h2>Card</h2>
      <p>id: {id}</p>
      <p>Name: {name}</p>
      <p>Image: {image}</p>
      <p>Continent: {continent}</p>
      <p>Capital: {capital}</p>
      <p>Subregion: {subregion}</p>
      <p>Aarea: {area}</p>
      <p>Population: {population}</p>
    </div>
   );
}
 
export default Card;