import React from 'react'
import './index.css'
import FilterPanel from './components/FilterPanel/FilterPanel'
import FlightCard from './components/FlightCard/FlightCard'

function App() {
  return (
    <div className='body'>
      <div>
      <FilterPanel/>
      </div>
      <div>
      <FlightCard/>
      <FlightCard/>
      <button className='showMoreButton'>Показать еще</button>
      </div>
      

      
      
    </div>
    

  )
}

export default App