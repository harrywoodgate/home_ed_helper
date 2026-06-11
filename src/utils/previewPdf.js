import { pdf } from "@react-pdf/renderer";

export async function previewPdf(doc) {

    if (!(doc instanceof Blob)) {
        doc = await pdf(doc).toBlob();
    }
  const url = URL.createObjectURL(doc);
  window.open(url, "_blank");
}
