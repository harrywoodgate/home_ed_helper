import { supabase } from "../supabaseClient";
import { pdf } from "@react-pdf/renderer";

export async function uploadPdf(doc, name) {
  const blob = await pdf(doc).toBlob();

  const user = (await supabase.auth.getUser()).data.user;
  if (!user) return;

  const filePath = `${user.id}/${Date.now()}-${name}`;

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
  });

  if (dbError) {
    console.error(dbError);
  }
}
