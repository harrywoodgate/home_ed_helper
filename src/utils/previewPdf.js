
export async function previewPdf(doc) {

  const url = URL.createObjectURL(doc);
  window.open(url, "_blank");
}
