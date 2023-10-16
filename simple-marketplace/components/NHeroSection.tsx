import React from 'react'
import { MbText, MbButton } from 'mintbase-ui'

const NHeroSection: React.FC = () => (
  <section className="section hero" aria-label="home">
    <div className="container">
      <MbText className="headline-lg h1-90">
        Discover rate collection or <span className="span">Arts & NFTs</span>
      </MbText>
      <MbText className="section-text body-lg h2-130">
        We are a huge marketplace dedicated to connecting great artists of all
        Metalink with their fans and unique token collectors!
      </MbText>
      <MbButton className="btn" label="Explore Now" />{' '}
    </div>
  </section>
)

export default NHeroSection
