import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[url('/abstract_design.svg')] bg-cover bg-center fixed top-0 w-full z-50 bg-white xl:static">
      <div className="navbar shadow-sm lg:px-16 xl:px-36">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <Menu size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center lg:navbar-start lg:flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-xl md:text-2xl xl:text-3xl"
          >
            Retail Shop
          </Link>
        </div>
        <div className="hidden lg:inline-flex lg:flex-2 lg:max-w-2/5 lg:justify-center bg-white rounded-full py-1.5 border">
          <ul className="flex gap-20 xl:text-xl">
            <li>
              <Link to="/" className="hover:cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:cursor-pointer">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:cursor-pointer">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex-1">
          <button className="btn btn-ghost btn-circle">
            <User className="lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
          </button>
        </div>
      </div>
    </header>
  );
}
