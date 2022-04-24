import React from 'react'
import styles from './FilterPanel.module.scss'


export const FilterPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.heading}>
        Сортировать
      </div>
      <p><input name="ascPrice" type="radio" /> - по возрастанию цены</p>
      <p><input name="DescPrice" type="radio" /> - по убыванию цены</p>
      <p><input name="time" type="radio" /> - по времени в пути</p>
      <div className={styles.heading}>
        Фильтровать
      </div>
      <p><input type="checkbox" name="withTransfer" /> - 1 пересадка</p>
      <p><input type="checkbox" name="noTransfer" /> - без пересадок</p>
      <div className={styles.heading}>
        Цена
      </div>
      <div className={styles.price}>От <input type="text" size="20" placeholder="0" /></div>
      <div>До <input type="text" size="20" placeholder="1000000" /></div>
      <div className={styles.heading}>
      Авиакомпании
      </div>

      <p><input type="checkbox" /> - LOT Polish Airlines от 21049 р.</p>
      <p><input type="checkbox" /> - Аэрофлот от 31733 р.</p>

    </div>


  )
}

export default FilterPanel