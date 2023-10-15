import React from 'react'
import itemsData from './items.json' // Replace with the actual path to your JSON data

const DiscoverItems = () => {
  const { items } = itemsData

  return (
    <section className="section discover" aria-labelledby="discover-label">
      <div className="container">
        <h2
          className="headline-md section-title text-center"
          id="discover-label"
        >
          Browse Collection
        </h2>

        <ul className="grid-list">
          {items.map((item, index) => (
            <li key={index}>
              <div className="discover-card card">
                <div
                  className="card-banner img-holder"
                  style={{ '--width': '500', '--height': '500' }}
                >
                  <img
                    src={item.imageSrc}
                    width="500"
                    height="500"
                    loading="lazy"
                    alt={item.title}
                    className="img-cover"
                  />
                  <button className="btn btn-primary">
                    <span className="span">Place Bid</span>
                  </button>
                  {item.countdown && (
                    <div className="countdown">
                      <span className="span">{item.countdown}</span>
                    </div>
                  )}
                </div>
                <div className="card-profile">
                  <img
                    src={item.profileImageSrc}
                    width="32"
                    height="32"
                    loading="lazy"
                    alt={item.authorName + ' profile'}
                    className="img"
                  />
                  <a href="#" className="link:hover">
                    @{item.authorName}
                  </a>
                </div>
                <h3 className="title-sm card-title">
                  <a href="#" className="link:hover">
                    {item.title}
                  </a>
                </h3>
                <div className="card-meta">
                  <div>
                    <p>Price</p>
                    <div className="card-price">
                      <img
                        src="/images/ethereum.svg"
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      />
                      <span className="span">{item.price}</span>
                    </div>
                  </div>
                  <div>
                    <p>Highest Bid</p>
                    <div className="card-price">
                      <img
                        src="/images/ethereum.svg"
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      />
                      <span className="span">{item.highestBid}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="btn-link link:hover">
          <span className="span">Explore More</span>
        </a>
      </div>
    </section>
  )
}

export default DiscoverItems
