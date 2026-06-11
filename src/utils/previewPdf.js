import { pdf } from "@react-pdf/renderer";

export async function previewPdf(doc) {
  const blob = await pdf(doc).toBlob();
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank");
}
