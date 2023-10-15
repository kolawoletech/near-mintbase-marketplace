import React from 'react';
import Slider from '@mui/material/Slider';

const Filters: React.FC = () => {
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 100]);
  const [buyNow, setBuyNow] = React.useState(false);

  const handlePriceChange = (event: Event, newValue: [number, number]) => {
    setPriceRange(newValue);
  };

  const handleBuyNowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBuyNow(event.target.checked);
  };

  return (
    <section className="filters">
      <h2>Filters</h2>
      <div className="filter-option">
        <label htmlFor="buyNowCheckbox">Buy Now:</label>
        <input
          type="checkbox"
          id="buyNowCheckbox"
          checked={buyNow}
          onChange={handleBuyNowChange}
        />
      </div>
      <div className="filter-option">
        <label>Price Range:</label>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `$${value}`}
          min={0}
          max={100}
        />
      </div>
      <div className="filter-option">Rarible</div>
      <div className="filter-option">Binance NFT Marketplace</div>
      {/* Add more filter options as needed */}
    </section>
  );
};

export default Filters;
