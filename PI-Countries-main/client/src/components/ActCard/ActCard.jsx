import { useSelector } from "react-redux";

const ActCard = ({id, name, paises}) => {

  return ( 
    <div >
      <h2>Card</h2>
      <p>id: {id}</p>
      <p>Name: {name}</p>
      <p>Country codes: {paises.map(e => e.id.toString() + " ")}</p>
    </div>
   );
}
 
export default ActCard;