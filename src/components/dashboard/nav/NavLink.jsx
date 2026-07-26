import { Link } from "react-router";

export default function NavLink({linkName, selected, setSelected, setShowMobileNav, svgPath}) {
  const selectedStyling =
    "flex items-center gap-x-2 font-medium bg-darker_background w-full rounded-md p-3 text-xs text-secondary";
  const unselectedStyling =
    "flex items-center gap-x-2 font-medium w-full rounded-md p-3 text-xs text-secondary_text hover:bg-background";
  const lowerCaseLinkName = linkName.toLowerCase();

  return (
    <Link
      to={lowerCaseLinkName}
      className={
        selected === lowerCaseLinkName
          ? selectedStyling
          : unselectedStyling
      }
      onClick={() => {
        setSelected(lowerCaseLinkName);
        setShowMobileNav(false);
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={
          selected === lowerCaseLinkName
            ? "w-5 h-5 fill-secondary"
            : "w-5 h-5 fill-secondary_text"
        }
      >
        <title>{lowerCaseLinkName}</title>
        <path d={svgPath} />
      </svg>
      <span>{linkName}</span>
    </Link>
  );
}
