import React from 'react'

import styles from './FlightCard.module.scss'
import Header from './Header'
import CardBody from './CardBody'


export const FlightCard = (flight) => {
console.log(flight.flight.carrier.airlineCode);
// const totalPrice = 

  return (
    <div className={styles.flightCard}>
      <div className={styles.card}>
        <Header
         totalPrice={flight.flight.price.total.amount}
         airlineCode={flight.flight.carrier.airlineCode}
          />
        <CardBody />
        <CardBody />
        <div className={styles.button}
        // onClick={() => {alert("Спасибо за выбор " + carrier.caption)}}
        >
          Выбрать
        </div>
      </div>
    </div>

  )
}
export default FlightCard
