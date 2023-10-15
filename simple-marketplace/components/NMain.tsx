import React from 'react';
import { MbTab, MbTabs } from 'mintbase-ui';
import NHeroSection from './NHeroSection';
import NTopCollection from './NTopCollection';
import ItemList from './ItemList';
import HorizontalItemList from './HorizontalItemList';
import TabSplitPlanr from './TabSplitPlanr';

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
};
const NMain: React.FC = () => (
  <main>
    <article>
      <NHeroSection />
      <NTopCollection />
      <MbTabs
        activeIndex={0}
        filterOptions={{
          defaultOptionId: 'newest',
          label: 'Order by',
          options: [
            {
              id: 'newest',
              label: 'Newest',
            },
            {
              id: 'oldest',
              label: 'Oldest',
            },
            {
              id: 'cheapest',
              label: 'Cheapest',
            },
            {
              id: 'most-expensive',
              label: 'Most expensive',
            },
          ],
        }}
        onOrderByChange={function noRefCheck() {}}
        onTabChange={function noRefCheck() {}}
      >
        <MbTab
          extraFilter="Show only listed"
          isExtraFilterSelected
          label={<span>NFTs</span>}
          onExtraFilterChange={function noRefCheck() {}}
        >
          List of NFTs
        </MbTab>
        <MbTab label={<span>Active auctions</span>}>
          List of active auctions
        </MbTab>
        <MbTab label={<span>Latest Listings</span>}>
          List of latest listings
        </MbTab>
      </MbTabs>
      <TabSplitPlanr />

      <HorizontalItemList items={jsonData.items} />
    </article>
  </main>
);

export default NMain;
