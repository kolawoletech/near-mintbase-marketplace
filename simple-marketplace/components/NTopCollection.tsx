// NTopCollection.tsx
import React from 'react'
import NTopCollectionItem from './NTopCollectionItem' // Update the path

import collectionData from './collectionData.json' // Update the path

const NTopCollection = () => (
  <section
    className="section top-collection"
    aria-labelledby="collection-label"
  >
    <div className="container">
      <div className="title-wrapper">
        <h2
          className="headline-md section-title text-center"
          id="collection-label"
        >
          Top Collections
        </h2>
        <a href="#" className="btn-link link link:hover">
          <span className="span">See More</span>
          <i className="arrow-forward" aria-hidden="true"></i>
        </a>
      </div>
      <div className="slider" data-slider>
        <ul className="slider-container" data-slider-container>
          {collectionData.map((item) => {
            console.log(item) // Log the item here

            return (
              <NTopCollectionItem
                key={item.collectionId}
                imgSrc={item.imgSrc}
                imgAlt={item.imgAlt}
                title={item.title}
                author={item.author}
                itemsCount={item.itemsCount}
                collectionId={item.collectionId}
              />
            )
          })}
        </ul>

        <button
          className="slider-btn prev"
          aria-label="Slide to previous item"
          data-slider-prev
        >
          <i className="chevron-back-sharp" aria-hidden="true"></i>
        </button>
        <button
          className="slider-btn next"
          aria-label="Slide to next item"
          data-slider-next
        >
          <i className="chevron-forward-sharp" aria-hidden="true"></i>
        </button>
      </div>
      <a href="#" className="btn-link link link:hover">
        <span className="span">See More</span>
        <i className="arrow-forward" aria-hidden="true"></i>
      </a>
    </div>
  </section>
)

export default NTopCollection
