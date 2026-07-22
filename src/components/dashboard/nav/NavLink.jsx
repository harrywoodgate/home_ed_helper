import { Link } from "react-router";

export default function NavLink({linkName, selected, setSelected, setShowMobileNav, svgPath}) {
  const selectedStyling =
    "flex items-center gap-x-2 font-medium bg-darker_background w-full rounded-md p-3 text-xs text-secondary";
  const unselectedStyling =
    "flex items-center gap-x-2 font-medium w-full rounded-md p-3 text-xs text-secondary_text hover:bg-background";

  return (
    <Link
      to={linkName.toLowerCase()}
      className={
        selected === linkName
          ? selectedStyling
          : unselectedStyling
      }
      onClick={() => {
        setSelected(linkName);
        setShowMobileNav(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={
          selected === linkName
            ? "w-5 h-5 fill-secondary"
            : "w-5 h-5 fill-secondary_text"
        }
      >
        <title>{linkName}</title>
        <path d={svgPath} />
      </svg>
      <span>{linkName}</span>
    </Link>
  );
}
