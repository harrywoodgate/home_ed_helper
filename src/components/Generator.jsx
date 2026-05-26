import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";
import { useImageUpload } from "../hooks/useImageUpload";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router";

export default function Generator() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { images, handleFileChange } = useImageUpload();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen">
      <h1>I can be a generator or a record player</h1>
      <input
        type="text"
        className="border-black border-2"
        onChange={(e) => setInput(e.target.value)}
      />
      <label className="cursor-pointer border-black border-2 p-1">
        Select File
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      {images.length > 0 &&
        images.map((image, i) => (
          <img key={i} src={image.base64} className="w-24 h-24" alt={image.name} />
        ))}
      <PDFDownloadLink
        document={<MyDocument input={input} images={images} />}
        fileName="firstdocument.pdf"
      >
        {({ loading }) => (loading ? "Generating..." : "Download PDF")}
      </PDFDownloadLink>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
