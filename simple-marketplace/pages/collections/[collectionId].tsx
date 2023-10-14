import React from 'react'
import Filters from '../../components/Filters'
import DiscoverItems from '../../components/DiscoverItems'
import { useRouter } from 'next/router'
import SearchBar from '../../components/SearchBar'

const CollectionDetail = () => {
  const router = useRouter()
  const { collectionId } = router.query

  if (!collectionId) {
    return <div>Loading...</div>
  }

  // Sample collection data (replace with your actual data or source)
  const collection = {
    title: 'Sample Collection Title',
    // Add other collection properties here
  }

  return (
    <div>
      <h1>Collection Details</h1>
      <p>Collection ID: {collectionId}</p>
      <p>Collection Title: {collection.title}</p>
      {/* Display other collection details */}
    </div>
  )
}

const DiscoverPage: React.FC = () => {
  return (
    <div className="discover-page">
      <div className="side-column">
        <Filters />
      </div>
      <div className="main-content">
        {/* <SearchBar /> */}

        <DiscoverItems />
      </div>
    </div>
  )
}

export default DiscoverPage
