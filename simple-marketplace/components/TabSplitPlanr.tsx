import React, { useState } from 'react'
import styles from './TabSplitPlanr.module.css'
import HorizontalItemList from './HorizontalItemList'

const TabSplitPlanr = ({ items }) => {
  const [activeTab, setActiveTab] = useState('lowToHigh')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  const sortItems = () => {
    if (!items || !Array.isArray(items)) {
      return []
    }

    if (activeTab === 'lowToHigh') {
      return items
        .slice()
        .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    } else if (activeTab === 'highToLow') {
      return items
        .slice()
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    }
    return items
  }

  return (
    <div className={styles['tab-split-planr']}>
      <div className={styles['tab-bar']}>
        <button
          className={activeTab === 'lowToHigh' ? styles['active'] : ''}
          onClick={() => handleTabChange('lowToHigh')}
        >
          Price: Low to High
        </button>
        <button
          className={activeTab === 'highToLow' ? styles['active'] : ''}
          onClick={() => handleTabChange('highToLow')}
        >
          Price: High to Low
        </button>
      </div>
      <HorizontalItemList items={sortItems()} />
    </div>
  )
}

export default TabSplitPlanr
