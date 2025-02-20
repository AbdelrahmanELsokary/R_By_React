import { useState } from 'react';
import { Link } from 'react-router';

function Header() {
  const [isOpenMenu, setMenu] = useState(false);
  return (
    <>
      <header className="bg-[#212529] sticky top-0 text-white py-1">
        <div className="container w-4/5 px-6 m-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="text-5xl">
              R
            </Link>
          </div>
          <nav>
            <ul className={`${isOpenMenu ? 'absolute right-0 top-10 bg-[#212529] p-6 w-36' : 'hidden'} md:flex gap-7`}>
              <li className="p-2 md:p-0">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 md:p-0">
                <a href="#about">About</a>
              </li>
              <li className="p-2 md:p-0">
                <a href="#services">Services</a>
              </li>
              <li className="p-2 md:p-0">
                <a href="#blog">Blog</a>
              </li>
              <li className="p-2 md:p-0">
                <a href="#footer">Contact</a>
              </li>
            </ul>
            <button className=" md:hidden" onClick={() => setMenu(!isOpenMenu)}>
              <img src="/icons/menu.webp" alt="toggel icon for nav" className="md:hidden" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
