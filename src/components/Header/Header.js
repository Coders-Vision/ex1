import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";
import { selectUser, logout } from "../../features/user/userSlice";
function Header() {
  const dispatch = useDispatch();
  const getUser = useSelector(selectUser);
  const Home = useNavigate();
  const logoutUser = () => {
    if (getUser) {
      dispatch(logout());
      setTimeout(() => {
        Home.push("/");
      }, 3000);
    }
  };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className={"lg:flex flex-grow items-center flex"}>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  activeClassName="active"
                  exact
                  to={`/`}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Hone
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/items`}
                  activeClassName="active"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Items
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/orders`}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={`/uploadfile`}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  Upload
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  onClick={() => logoutUser()}
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
