import { useState } from 'react'
import { ESize, EState, MbButton, MbLogo, MbText } from 'mintbase-ui'
import Head from 'next/head'
import Header from '../components/Header'
import Items from '../components/Items'
import BuyModal from '../components/BuyModal/BuyModal'
import { SelectedNft } from '../types/types'
import NHeroSection from '../components/NHeroSection'
import Image from 'next/image'

function Store(): JSX.Element {
  const [showBuyModal, setShowBuyModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState({} as SelectedNft)

  const handleOpenBuyModal = (item: SelectedNft) => {
    setSelectedItem(item)
    setShowBuyModal(true)
  }

  const handleCloseBuyModal = () => {
    setSelectedItem({} as SelectedNft)
    setShowBuyModal(false)
  }

  return (
    <div className="flex flex-1 flex-col min-h-screen text-gray-500">
      <Head>
        <title>Mintbase - Simple Marketplace Example</title>
      </Head>
      <Header />
      <NHeroSection />
      <div className="m-8">
        <MbText>
          1. Make sure to change the env NEXT_PUBLIC_AFFILIATE_ACCOUNT to your
          own NEAR account jjdj
        </MbText>
        <MbText>
          2. On purchase, see your account pop up on the leaderboard
        </MbText>
        <Image
          src="/images/showcase-3.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <MbText>3. Check your wallet balance to see funds go up!</MbText>
        <div className="mt-4 flex">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mintbase.xyz/leaderboard"
          >
            <MbButton
              label="See Leaderboard"
              size={ESize.MEDIUM}
              state={EState.ACTIVE}
            />
          </a>
        </div>
      </div>
      <div className="flex w-full">
        <Items showModal={handleOpenBuyModal} />
      </div>
      <div className="mx-24 mt-4">
        {!!showBuyModal && (
          <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />
        )}
      </div>
    </div>
  )
}

export default Store
