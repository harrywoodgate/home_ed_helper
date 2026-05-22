import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";

export default function Generator() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen">
      <h1>I can be a generator or a record player</h1>
      <input
        type="text"
        className="border-black border-2"
        onChange={e => setInput(e.target.value)}
      />
      <PDFDownloadLink
        document={<MyDocument input={input} />}
        fileName="firstdocument.pdf"
        >
        {({ loading }) => loading ? "Generating..." : "Download PDF"}
        </PDFDownloadLink>
    </div>
  );
}
