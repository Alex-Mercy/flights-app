import React from 'react'
import styles from './FlightCard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'


function CardBody() {
  return (
    <div className={styles.body}>
    <div className={styles.dividerLine}></div>
        <div className={styles.line}>
          Москва, ШЕРЕМЕТЬЕВО <span className={styles.info}>(SVO) → </span>  ЛОНДОН, Лондон, Хитроу <span className={styles.info}>(LHR)</span>
        </div>
        <div className={styles.underline} />
        <div className={styles.schedule}>
          <div>
            <span>
              {/* {moment(firstSegment.departureDate).format('LT')}&nbsp; */}
              9:45 </span>
            <span className={styles.info}> 18 авг. вт
              {/* {moment(firstSegment.departureDate).format('D MMM dd')} */}
            </span>
          </div>
          <div>
            <FontAwesomeIcon size="1x" icon={faClock} />&nbsp;
            <span>
              {/* {Math.floor(legs.duration / 60)}&nbsp;ч&nbsp; */}
              {/* {legs.duration % 60}&nbsp;мин */}
              8 ч 55 мин
            </span>
          </div>
          <div>
            <span className={styles.info}>
              {/* {moment(lastSegment.arrivalDate).format('D MMM dd')} */}
              18 авг. вт
              &nbsp;</span>
            <span>
              {/* {moment(lastSegment.arrivalDate).format('LT')} */}
              16:40
            </span>
          </div>
        </div>
        <div className={styles.scheduleUnderLine}>
         {/* {segments} */}
        <span>1 пересадка </span>
       </div>
        <div className={styles.line}>
        {/* <span>Рейс выполняет:
            {firstSegment.airline.airlineCode}&nbsp;{firstSegment.airline.caption}</span> */}
         Рейс выполняет: BT Air Baltic Corporation A/S
       </div>
      </div>
  )
}

export default CardBody