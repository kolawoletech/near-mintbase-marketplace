import React from 'react';
import { MbText, MbActionText, MbButton } from 'mintbase-ui';

const NHeroSection: React.FC = () => (
  <section className="section hero" aria-label="home">
    <div className="container">
      <MbText className="headline-lg h1-90">
        Discover rate collection or
        {' '}
        <span className="span">Arts & NFTs</span>
      </MbText>
      <MbText className="section-text body-lg h2-130">
        We are a huge marketplace dedicated to connecting great artists of all
        Metalink with their fans and unique token collectors!
      </MbText>
      <MbButton
        href="#"
        className="btn"
        btnType="primary"
        label="Explore Now"
        size="medium"
        state="caution"
      />
      {/*         <MbActionText size="medium" text="https://mintbase.io" />{' '}
         */}
      {' '}
    </div>
  </section>
);

export default NHeroSection;
