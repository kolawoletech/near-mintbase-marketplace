import React from 'react'
import styles from './HorizontalItemList.module.css'

// Define the type for the 'items' prop
type Item = {
  title: string
  imageSrc: string
  authorName: string
  price: string
  owners: string
  number: string
}

type HorizontalItemListProps = {
  items: Item[] // Explicitly specify the type here
}

const HorizontalItemList: React.FC<HorizontalItemListProps> = ({ items }) => (
  <ul className={styles['horizontal-item-list']}>
    {/* ... rest of your component ... */}
  </ul>
)

export default HorizontalItemList
