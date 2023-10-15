// components/Layout.tsx
import Head from 'next/head';
import React, { ReactNode } from 'react';
import 'ionicons';

type LayoutProps = {
  children: ReactNode
};

const NLayout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      {/* Add meta tags here */}
      <title>Metalink - Discover rate collection or Arts & NFTs</title>
      {/* Add other head elements here */}
    </Head>
    {children}
    {/* "Back to Top" button */}
    <a
      href="#top"
      className="back-to-top btn-icon"
      aria-label="back to top"
      data-back-top-btn
    />
  </div>
);

export default NLayout;
