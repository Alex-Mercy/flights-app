import React from 'react'
import { useSelector, useDispatch, } from 'react-redux';

import FilterPanel from '../components/FilterPanel/FilterPanel'
import FlightCard from '../components/FlightCard/FlightCard'
import { onSetFlights } from '../store/actions/actions';


function Flights() {
    const dispatch = useDispatch();
    const flights = useSelector(({ filters }) => filters.flights);
    
    React.useEffect(() => {
        dispatch(onSetFlights());
    }, [dispatch]);

  return (
    <div className='body'>
      <div>
        <FilterPanel />
      </div>
      <div>
      {flights.map(flight => {
          return <FlightCard flight={flight.flight} key={flight.flightToken}/>
      })}

        <button className='showMoreButton'>Показать еще</button>
      </div>
    </div>
  )
}

export default Flights