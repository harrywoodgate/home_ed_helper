import { Link } from "react-router";
import logo from '../../img/logo.png'

export default function Nav({ selected, setSelected, setShowLogoutPopup, showMobileNav, setShowMobileNav }) {
  const selectedStyling =
    "flex items-center gap-x-2 font-medium bg-darker_background w-full rounded-md p-3 text-xs text-secondary";
  const unselectedStyling =
    "flex items-center gap-x-2 font-medium w-full rounded-md p-3 text-xs text-secondary_text hover:bg-background";

  return (
    <>
      <nav className={showMobileNav ? "animate-nav_slide_in absolute h-screen z-20 w-[240px] py-6 px-4 flex flex-col bg-white items-start justify-between shadow-sm border-r shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)]" : "hidden lg:flex w-[240px] py-6 px-4 flex-col row-start-1 row-end-3 bg-white items-start justify-between shadow-sm border-r shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)]"}>
        <div className="flex flex-col items-start w-full">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-[35px] mr-1 sm:mr-0 sm:w-[45px]"
            />
            <h2 className="sm:text-lg font-semibold">Home Ed Helper</h2>
          </div>
          <Link
            to="generator"
            className={
              selected === "Generator"
                ? `${"mt-8"} ${selectedStyling}`
                : `${"mt-8"} ${unselectedStyling}`
            }
            onClick={() => {setSelected("Generator"); setShowMobileNav(false);}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={
                selected === "Generator" ? "w-5 h-5 fill-secondary" : "w-5 h-5 fill-secondary_text"
              }
            >
              <title>generator</title>
              <path d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
            </svg>
            <span>Generator</span>
          </Link>
          <Link
            to="history"
            className={
              selected === "History" ? selectedStyling : unselectedStyling
            }
            onClick={() => {setSelected("History"); setShowMobileNav(false);}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={
                selected === "History" ? "w-5 h-5 fill-secondary" : "w-5 h-5 fill-secondary_text"
              }
            >
              <title>history</title>
              <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" />
            </svg>
            <span>History</span>
          </Link>
        </div>
        <button
          onClick={() => setShowLogoutPopup(true)}
          className="flex items-center gap-x-2 font-medium rounded-md p-3 text-xs w-full text-left hover:bg-background"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-secondary_text">
            <title>logout</title>
            <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
          </svg>
          <span className="text-secondary_text">Logout</span>
        </button>
      </nav>
      <div className={showMobileNav ? "fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-start z-10" : "hidden"} onClick={() => setShowMobileNav(false)}></div>
</>
  );
}
