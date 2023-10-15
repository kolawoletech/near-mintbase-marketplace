// components/HorizontalItemList.js

import React from 'react'
import styles from './HorizontalItemList.module.css'

const HorizontalItemList = ({ items }) => {
  return (
    <ul className={styles['horizontal-item-list']}>
      {items
        .reduce((rows, item, index) => {
          if (index % 2 === 0) {
            rows.push([item])
          } else {
            rows[rows.length - 1].push(item)
          }
          return rows
        }, [])
        .map((row, rowIndex) => (
          <li key={rowIndex} className={styles['horizontal-row']}>
            {row.map((item, index) => (
              <div key={index} className={styles['horizontal-item']}>
                <img
                  className={styles.thumbnail}
                  src={item.imageSrc}
                  alt={item.title}
                />
                <div className={styles['vertical-columns']}>
                  <div className={styles['vertical-column']}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.author}>
                      Author: {item.authorName}
                    </div>
                  </div>
                  <div className={styles['vertical-column']}>
                    <div className={styles.price}>Price: {item.price}</div>
                    <div className={styles.owners}>Owners: {item.owners}</div>
                    <div className={styles.number}>Number: {item.number}</div>
                  </div>
                </div>
              </div>
            ))}
          </li>
        ))}
    </ul>
  )
}

export default HorizontalItemList
