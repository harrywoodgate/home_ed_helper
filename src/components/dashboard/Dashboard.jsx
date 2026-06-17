import { Outlet } from "react-router";
import Nav from "./Nav";
import Header from "./Header";
import { useManageHistory } from "../../hooks/useManageHistory";
import { useManageImages } from "../../hooks/useManageImages";
import { useState } from "react";

export default function Dashboard() {
  const [subject, setSubject] = useState("");
  const [summary, setSummary] = useState("");
  const { history, loading, deleteHistory, addHistory } = useManageHistory();
  const { images, addImage, deleteImage, resetImages } = useManageImages();

  return (
    <div className="grid grid-cols-[1fr_3fr] min-h-screen grid-rows-[auto_1fr]">
      <Header />
      <Nav />
      <Outlet
        context={{
          history,
          loading,
          deleteHistory,
          addHistory,
          images,
          addImage,
          deleteImage,
          resetImages,
          subject,
          setSubject,
          summary,
          setSummary
        }}
      />
    </div>
  );
}
