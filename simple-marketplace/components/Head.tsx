import React from 'react'

const Head = () => {
  return (
    <head>
      {/*
        - primary meta tags
      */}
      <title>Metalink - Discover rate collection or Arts & NFTs</title>
      <meta
        name="title"
        content="Metalink - Discover rate collection or Arts & NFTs"
      />
      <meta
        name="description"
        content="This is a NFT html template made by codewithsadee"
      />

      {/*
        - favicon
      */}
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

      {/*
        - google font link
      */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/*
        - custom css link
      */}
      <link rel="stylesheet" href="../public/css/style.css" />
    </head>
  )
}

export default Head
