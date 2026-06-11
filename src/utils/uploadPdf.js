import { supabase } from "../supabaseClient";
import { pdf } from "@react-pdf/renderer";

export async function uploadPdf(doc, fileName) {
  const blob = await pdf(doc).toBlob();

  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return;

  const filePath = `${user.id}/${Date.now()}-${fileName}.pdf`;

  const { error: uploadError } = await supabase.storage
    .from("reports")
    .upload(filePath, blob);

  if (uploadError) {
    console.error(uploadError);
    return;
  }

  const { error: dbError } = await supabase.from("report_uploads").insert({
    user_id: user.id,
    file_path: filePath,
    file_name: fileName
  });

  if (dbError) {
    console.error(dbError);
  }
}
