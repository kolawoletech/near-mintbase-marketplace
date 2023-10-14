import React from 'react'
import Link from 'next/link'

interface TopCollectionItemProps {
  imgSrc: string
  imgAlt: string
  title: string
  author: {
    name: string
    avatar: string
    link: string
  }
  itemsCount: number
  collectionId: any // Add a unique identifier for each collection item
}

const TopCollectionItem: React.FC<TopCollectionItemProps> = ({
  imgSrc,
  imgAlt,
  title,
  author,
  itemsCount,
  collectionId,
}) => (
  <li className="slider-item">
    <div className="collection-card card">
      <Link href={`/collections/${collectionId}`}>
        <a>
          <figure className="card-banner img-holder">
            <img
              src={imgSrc}
              loading="lazy"
              alt={imgAlt}
              className="img-cover"
            />
          </figure>
        </a>
      </Link>
      <div className="card-content">
        <div className="card-profile">
          <img src={author.avatar} loading="lazy" alt={author.name} />
          <i className="checkmark-circle" aria-hidden="true"></i>
        </div>
        <h3 className="title-md card-title">
          <Link href={`/collections/${collectionId}`}>
            <a className="link link:hover">{title}</a>
          </Link>
        </h3>
        <p className="label-md card-author">
          by{' '}
          <Link href={author.link}>
            <a className="link">@{author.name}</a>
          </Link>
        </p>
        <p className="card-text">{itemsCount} Items</p>
      </div>
    </div>
  </li>
)

export default TopCollectionItem
