import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { getDetail } from '../../redux/action';



function Details() {
  let { detailId } = useParams();
  const countryDetail = useSelector((state) => state.countryDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    axios(`http://localhost:3001/countries/${detailId}`)
    .then(({ data }) => {
      console.log(data);
       if (data.name) {
          dispatch(getDetail(data.id));
       } else {
          window.alert('No hay paise con ese ID');
       }
    });
 }, [detailId]);

  return ( 
    <div>
      <h3>Detail!</h3>
      {countryDetail.name
        ? <h2>{countryDetail.name}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.capital
        ? <h2>{countryDetail.capital}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.id
        ? <h2>{countryDetail.id}</h2>
        : <h2>Loading...</h2>
      }
      {countryDetail.continent
        ? <h2>{countryDetail.continent}</h2>
        : <h2>Loading...</h2>
      }
    </div>
   );
}

export default Details;