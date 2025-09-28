import { Menu, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[url('/abstract_design.svg')] bg-cover bg-center fixed top-0 w-full z-50 bg-white ">
      <div className="navbar shadow-sm">
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
        <div className="navbar-center lg:navbar-start lg:flex-1">
          <a className="btn btn-ghost text-xl">Retail Shop</a>
        </div>
        <div className="hidden lg:inline-flex lg:flex-2 lg:max-w-2/5 lg:justify-center bg-white rounded-full py-1.5 border">
          <ul className="flex gap-20">
            <li>Home</li>
            <li>Product</li>
            <li>About</li>
          </ul>
        </div>
        <div className="navbar-end lg:flex-1">
          <button className="btn btn-ghost btn-circle">
            <User />
          </button>
        </div>
      </div>
    </header>
  );
}
