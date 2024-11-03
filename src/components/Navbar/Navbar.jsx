import { NavLink, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "transparent",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "white" : "white",
              fontWeight: isActive ? "700" : "500",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"statistics"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "transparent",
              color: isActive ? "white" : "white",
              textDecoration: isActive ? "underline" : "",
              fontWeight: isActive ? "700" : "500",
            };
          }}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"dashboard"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={({ isActive }) => {
            return {
              backgroundColor: isActive ? "transparent" : "transparent",
              textDecoration: isActive ? "underline" : "",
              color: isActive ? "white" : "white",
              fontWeight: isActive ? "700" : "500",
            };
          }}
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  const { pathname } = useLocation();
  if (pathname === "/") {
    return (
      <div className="mb-[500px] space-y-12 rounded-3xl bg-primary-0 px-32 pt-10">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box p-2 text-white shadow"
              >
                {links}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-white">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
          </div>
          <div className="navbar-end space-x-4">
            <div className="rounded-full bg-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_13_2151)">
                  <path
                    d="M3.3335 15.8333C3.3335 16.2754 3.50909 16.6993 3.82165 17.0118C4.13421 17.3244 4.55814 17.5 5.00016 17.5C5.44219 17.5 5.86611 17.3244 6.17867 17.0118C6.49123 16.6993 6.66683 16.2754 6.66683 15.8333C6.66683 15.3913 6.49123 14.9674 6.17867 14.6548C5.86611 14.3423 5.44219 14.1667 5.00016 14.1667C4.55814 14.1667 4.13421 14.3423 3.82165 14.6548C3.50909 14.9674 3.3335 15.3913 3.3335 15.8333Z"
                    stroke="#3A3A3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 15.8333C12.5 16.2754 12.6756 16.6993 12.9882 17.0118C13.3007 17.3244 13.7246 17.5 14.1667 17.5C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333C15.8333 15.3913 15.6577 14.9674 15.3452 14.6548C15.0326 14.3423 14.6087 14.1667 14.1667 14.1667C13.7246 14.1667 13.3007 14.3423 12.9882 14.6548C12.6756 14.9674 12.5 15.3913 12.5 15.8333Z"
                    stroke="#3A3A3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.1668 14.1667H5.00016V2.5H3.3335"
                    stroke="#3A3A3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 4.16667L16.6667 5.00001L15.8333 10.8333H5"
                    stroke="#3A3A3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_2151">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="rounded-full bg-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_13_2159)">
                  <path
                    d="M16.2501 10.4767L10.0001 16.6667L3.75009 10.4767C3.33784 10.0755 3.01312 9.59334 2.79638 9.06052C2.57963 8.52771 2.47556 7.95579 2.4907 7.38077C2.50585 6.80576 2.63989 6.24011 2.88439 5.71944C3.12888 5.19878 3.47853 4.73437 3.91133 4.35548C4.34412 3.97658 4.85068 3.6914 5.3991 3.5179C5.94752 3.34439 6.52593 3.28631 7.09789 3.34733C7.66986 3.40834 8.223 3.58713 8.72248 3.87242C9.22196 4.15771 9.65696 4.54333 10.0001 5.00499C10.3447 4.54668 10.7802 4.16443 11.2793 3.88217C11.7785 3.5999 12.3305 3.4237 12.9009 3.36459C13.4712 3.30549 14.0477 3.36474 14.5941 3.53865C15.1405 3.71257 15.6451 3.99739 16.0764 4.3753C16.5077 4.75321 16.8563 5.21606 17.1004 5.7349C17.3446 6.25374 17.479 6.8174 17.4953 7.39058C17.5117 7.96377 17.4095 8.53416 17.1952 9.06604C16.9809 9.59792 16.6592 10.0798 16.2501 10.4817"
                    stroke="#3A3A3A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13_2159">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <Banner></Banner>
      </div>
    );
  }
  const links2 = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"statistics"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"dashboard"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="space-y-6 rounded-3xl px-32 pt-10">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box p-2 text-[#0B0B0BB2] shadow"
            >
              {links2}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-[#0B0B0B]">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#0B0B0BB2]">
            {links2}
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <div className="rounded-full border border-[#0B0B0B1A] bg-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_13_2151)">
                <path
                  d="M3.3335 15.8333C3.3335 16.2754 3.50909 16.6993 3.82165 17.0118C4.13421 17.3244 4.55814 17.5 5.00016 17.5C5.44219 17.5 5.86611 17.3244 6.17867 17.0118C6.49123 16.6993 6.66683 16.2754 6.66683 15.8333C6.66683 15.3913 6.49123 14.9674 6.17867 14.6548C5.86611 14.3423 5.44219 14.1667 5.00016 14.1667C4.55814 14.1667 4.13421 14.3423 3.82165 14.6548C3.50909 14.9674 3.3335 15.3913 3.3335 15.8333Z"
                  stroke="#3A3A3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 15.8333C12.5 16.2754 12.6756 16.6993 12.9882 17.0118C13.3007 17.3244 13.7246 17.5 14.1667 17.5C14.6087 17.5 15.0326 17.3244 15.3452 17.0118C15.6577 16.6993 15.8333 16.2754 15.8333 15.8333C15.8333 15.3913 15.6577 14.9674 15.3452 14.6548C15.0326 14.3423 14.6087 14.1667 14.1667 14.1667C13.7246 14.1667 13.3007 14.3423 12.9882 14.6548C12.6756 14.9674 12.5 15.3913 12.5 15.8333Z"
                  stroke="#3A3A3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1668 14.1667H5.00016V2.5H3.3335"
                  stroke="#3A3A3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 4.16667L16.6667 5.00001L15.8333 10.8333H5"
                  stroke="#3A3A3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2151">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="rounded-full border border-[#0B0B0B1A] bg-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_13_2159)">
                <path
                  d="M16.2501 10.4767L10.0001 16.6667L3.75009 10.4767C3.33784 10.0755 3.01312 9.59334 2.79638 9.06052C2.57963 8.52771 2.47556 7.95579 2.4907 7.38077C2.50585 6.80576 2.63989 6.24011 2.88439 5.71944C3.12888 5.19878 3.47853 4.73437 3.91133 4.35548C4.34412 3.97658 4.85068 3.6914 5.3991 3.5179C5.94752 3.34439 6.52593 3.28631 7.09789 3.34733C7.66986 3.40834 8.223 3.58713 8.72248 3.87242C9.22196 4.15771 9.65696 4.54333 10.0001 5.00499C10.3447 4.54668 10.7802 4.16443 11.2793 3.88217C11.7785 3.5999 12.3305 3.4237 12.9009 3.36459C13.4712 3.30549 14.0477 3.36474 14.5941 3.53865C15.1405 3.71257 15.6451 3.99739 16.0764 4.3753C16.5077 4.75321 16.8563 5.21606 17.1004 5.7349C17.3446 6.25374 17.479 6.8174 17.4953 7.39058C17.5117 7.96377 17.4095 8.53416 17.1952 9.06604C16.9809 9.59792 16.6592 10.0798 16.2501 10.4817"
                  stroke="#3A3A3A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2159">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
