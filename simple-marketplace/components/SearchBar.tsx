import React from 'react';
import styles from './SearchBar.module.css'; // Import the CSS module

const SearchBar = () => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search by NFTs"
      className="search-input"
    />
    <button type="button" className="search-button">
      Search
    </button>
  </div>
);

export default SearchBar;
