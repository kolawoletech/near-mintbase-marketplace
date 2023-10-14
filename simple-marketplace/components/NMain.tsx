// components/Main.tsx
import React from 'react'
import NHeroSection from './NHeroSection'
import NTopCollection from './NTopCollection'

const NMain: React.FC = () => {
  return (
    <main>
      <article>
        <NHeroSection />
        <NTopCollection />
      </article>
    </main>
  )
}

export default NMain
