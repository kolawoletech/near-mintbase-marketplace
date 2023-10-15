import React from 'react'
import styles from './ItemList.module.css'

type Item = {
  title: string
  imageSrc: string
  authorName: string
  price: string
}

type ItemListProps = {
  items: Item[]
}

const ItemList: React.FC<ItemListProps> = ({ items }) => (
  <ul className={styles['horizontal-item-list']}>
    {items.map((item, index) => (
      <li key={index} className={styles['horizontal-item']}>
        <img
          className={styles.thumbnail}
          src={item.imageSrc}
          alt={item.title}
        />
        <div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.author}>Author: {item.authorName}</div>
          <div className={styles.price}>Price: {item.price}</div>
        </div>
      </li>
    ))}
  </ul>
)

export default ItemList
