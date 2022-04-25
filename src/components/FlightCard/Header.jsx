import React from 'react'
import styles from './FlightCard.module.scss'

function Header({airlineCode, totalPrice }) {
  return (
    <div className={styles.header}>
        <div className={styles.airlineImage}>
          <img src={`https://www.skyscanner.net/images/airlines/small/${airlineCode}.png`}
            alt='airlineCode'
          />
        </div>
        <div className={styles.cost}>
          <span>{totalPrice} ₽</span>
          <small>Стоимость для одного взрослого пассажира</small>
        </div>
      </div>
  )
}

export default Header