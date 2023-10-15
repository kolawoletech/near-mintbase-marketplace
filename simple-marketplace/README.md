---
name: NEAR-Mintbase reusable  Marketplace UI
slug: near-mintbase-marketplace
description: Simple Marketplace on MintBase
framework: Next.js
css: Tailwind
---

# Simple Marketplace

This examples shows a simple marketplace with mintbase UI and NEAR Protocol

## Requirements

- [Setup a Near Wallet](https://wallet.testnet.near.org/)
- [Setup a Mintbase store aka Smart Contract](https://www.youtube.com/watch?v=Ck2EPrtuxa8) and [Mint NFTS](https://www.youtube.com/watch?v=6L_aAnJc3hM):
- [Get a Developer Key](https://testnet.mintbase.io/developer)

## Getting Started

Run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

## Set ENV variables

Once that's done, copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

if you use windows without powershell or cygwin:

```bash
copy .env.example .env.local
```

To get your `api key` visit :

[Mintbase Developers Page for Mainnet](https://www.mintbase.io/developer):  
[Mintbase Developers Page for testnet](https://testnet.mintbase.io/developer):

```
NEXT_PUBLIC_DEVELOPER_KEY=your_mintbase_api_key
```

`NEXT_PUBLIC_NETWORK` could be `testnet` or `mainnet`
