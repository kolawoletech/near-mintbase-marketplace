// components/Main.tsx
import React from 'react'
import NHeroSection from './NHeroSection'
import NTopCollection from './NTopCollection'
import ItemList from '../components/ItemList'
import collectionData from './collectionData.json' // Update the path
const jsonData = {
  items: [
    {
      title: 'Genuine Undead #3902',
      imageSrc: '/images/showcase-8.gif',
      profileImageSrc: '/images/avatar-8.jpg',
      authorName: 'StreetBoy',
      price: '3.5 ETH',
      highestBid: '3.55 ETH',
    },
    {
      title: 'Windchime #768',
      imageSrc: '/images/showcase-7.jpg',
      profileImageSrc: '/images/avatar-7.jpg',
      authorName: 'CutieGirl',
      price: '3.5 ETH',
      highestBid: '3.55 ETH',
      countdown: '5d 04h 18m 04s',
    },
    {
      title: 'Probably A Label #3277',
      imageSrc: '/images/showcase-6.gif',
      profileImageSrc: '/images/avatar-6.gif',
      authorName: 'ButterFly',
      price: '3.5 ETH',
      highestBid: '3.55 ETH',
    },
    {
      title: 'Probably A Label #1711',
      imageSrc: '/images/showcase-5.jpg',
      profileImageSrc: '/images/avatar-5.jpg',
      authorName: 'NorseQueen',
      price: '3.5 ETH',
      highestBid: '3.55 ETH',
    },
    {
      title: 'Shibuya Scramble Punks',
      imageSrc: '/images/showcase-4.jpg',
      profileImageSrc: '/images/avatar-4.jpg',
      authorName: 'BigBull',
      price: '3.5 ETH',
      highestBid: '3.55 ETH',
    },
    {
      title: 'Looki #0147',
      imageSrc: '/images/showcase-2.jpg',
      profileImageSrc: '/images/avatar-2.jpg',
      authorName: 'CrazyAnyone',
      price: '3.5 ETH',
      highestBid: '3.55 ETH',
      countdown: '10d 23h 24m 10s',
    },
  ],
}
const NMain: React.FC = () => {
  return (
    <main>
      <article>
        <NHeroSection />
        <NTopCollection />
        <ItemList items={jsonData.items} />
      </article>
    </main>
  )
}

export default NMain
