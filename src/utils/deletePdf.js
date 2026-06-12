import { supabase } from "../supabaseClient";

export async function deletePdf(filePath) {
  await supabase.from("report_uploads").delete().eq("file_path", filePath);
  const {error} = await supabase.storage.from('reports').remove([filePath]);

  if (error) {
    console.error(error);
  }
}
