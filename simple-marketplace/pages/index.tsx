import { useState } from 'react'
import { ESize, EState, MbButton, MbText } from 'mintbase-ui'
import Header from '../components/Header'
import BuyModal from '../components/BuyModal/BuyModal'
import { SelectedNft } from '../types/types'
import NHeader from '../components/NHeader'
import NLayout from '../components/NLayout'
import NMain from '../components/NMain'

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
    <NLayout>
      <NHeader />
      <Header />

      <NMain />
      {/* Add other sections here */}
    </NLayout>
  )
}

export default Store
