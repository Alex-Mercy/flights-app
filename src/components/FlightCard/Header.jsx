import React from 'react'
import styles from './FlightCard.module.scss'

function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.airlineImage}>
          <img src='https://www.skyscanner.net/images/airlines/small/BT.png'
            alt='airlineCode'
          />
        </div>
        <div className={styles.cost}>
          <span>21909 ₽</span>
          <small>Стоимость для одного взрослого пассажира</small>
        </div>
      </div>
  )
}

export default Header