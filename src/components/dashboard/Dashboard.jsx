import { Outlet } from "react-router";
import Nav from "./Nav";
import Header from "./Header";
import { useManageHistory } from "../../hooks/useManageHistory";
import { useManageImages } from "../../hooks/useManageImages";
import { useState } from "react";
import LogoutPopUp from "./LogoutPopUp";
import { useEffect } from "react";

export default function Dashboard() {
  const [subject, setSubject] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [selected, setSelected] = useState("Generator");
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { history, loading, deleteHistory, addHistory } = useManageHistory();
  const { images, selectImages, deleteImage, resetImages, dropImages } =
    useManageImages();

  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    window.addEventListener("dragover", preventDefault);
    window.addEventListener("drop", preventDefault);

    return () => {
      window.removeEventListener("dragover", preventDefault);
      window.removeEventListener("drop", preventDefault);
    };
  }, []);


  return (
    <div className="flex flex-col lg:grid grid-cols-[240px_1fr] min-h-screen grid-rows-[auto_1fr]">
      <Header setShowLogoutPopup={setShowLogoutPopup} setShowMobileNav={setShowMobileNav} />
      <Nav
        selected={selected}
        setSelected={setSelected}
        setShowLogoutPopup={setShowLogoutPopup}
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
      <Outlet
        context={{
          history,
          loading,
          deleteHistory,
          addHistory,
          images,
          selectImages,
          deleteImage,
          dropImages,
          resetImages,
          subject,
          setSubject,
          summary,
          setSummary,
          date,
          setDate,
          setSelected,
        }}
      />
      <LogoutPopUp active={showLogoutPopup} setActive={setShowLogoutPopup} />
    </div>
  );
}
