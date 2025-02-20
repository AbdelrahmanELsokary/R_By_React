import { Link } from "react-router";

function Header() {
  return (
    <>
      <header className="bg-[#212529] text-white py-1">
        <div className="container w-4/5 px-6 m-auto flex justify-between items-center">
          <div className="logo">
            <a href="/" className="text-5xl">
              R
            </a>
          </div>
          <nav>
            <ul className="hidden md:flex gap-7">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
            <img src="/icons/menu.webp" alt="toggel icon for nav" className="md:hidden" />
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
