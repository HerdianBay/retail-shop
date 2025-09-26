import { Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[url('/abstract_design.svg')] bg-cover bg-center fixed top-0 w-full z-10 bg-white">
      <div className="navbar shadow-sm">
        <div className="navbar-start">
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
                <a>Home</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Retail Shop</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <User />
          </button>
        </div>
      </div>
    </header>
  );
}
