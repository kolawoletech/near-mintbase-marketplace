// components/Header.js
import Link from 'next/link';
import 'ionicons';

const NHeader = () => (
  <header className="header" data-header>
    <div className="container">
      <Link href="/">
        <a>
          <img
            src="/images/logo-small.svg"
            width="40"
            height="40"
            alt="Metalink home"
            className="logo-small"
          />
          <img
            src="/images/logo.svg"
            width="126"
            height="28"
            alt="Metalink home"
            className="logo"
          />
        </a>
      </Link>

      <nav className="navbar" data-navbar>
        <ul className="navbar-list">
          <li>
            <Link href="/">
              <a className="navbar-link label-lg link:hover">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/explore">
              <a className="navbar-link label-lg link:hover">Explore</a>
            </Link>
          </li>
          <li>
            <Link href="/wallet">
              <a className="navbar-link label-lg link:hover">Wallet</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="navbar-link label-lg link:hover">About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="navbar-link label-lg link:hover">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-action">
        <button className="btn-icon primary" aria-label="wallet">
          {/* <ion-icon name="wallet-outline"></ion-icon> */}
        </button>
        <button
          className="btn-icon profil-btn"
          aria-label="Metalink account: Fiona Doe"
        >
          <img
            src="/images/profile.jpg"
            width="50"
            height="50"
            alt="Fiona Doe"
            className="img-cover"
          />
        </button>
        <button
          className="nav-toggle-btn"
          aria-label="menu toggle"
          data-nav-toggler
        >
          {/*             <ion-icon
              name="menu-outline"
              aria-hidden="true"
              className="default-icon"
            ></ion-icon>
            <ion-icon
              name="close-outline"
              aria-hidden="true"
              className="active-icon"
            ></ion-icon> */}
        </button>
      </div>
    </div>
  </header>
);

export default NHeader;
