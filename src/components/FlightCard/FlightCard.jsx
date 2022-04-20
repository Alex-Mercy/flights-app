import React from 'react'
import styles from './FlightCard.module.scss'
import Header from './Header'
import CardBody from './CardBody'
import flights from '../../flights.json'

const data = flights.result.flights;


export const FlightCard = (carrier, price, legs) => {
  return (
    <div className={styles.flightCard}>
      <div className={styles.card}>
        <Header carrier={carrier} price={price}/>
        <CardBody firstFlight={legs[0]}/>
        <CardBody returnFlight={legs[1]}/>
        <div className={styles.button}
        onClick={() => {alert("Спасибо за выбор " + carrier.caption)}}
        >
          Выбрать
        </div>
      </div>
    </div>

  )
}
export default FlightCard
