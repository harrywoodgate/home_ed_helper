import { supabase } from "../supabaseClient";

export async function fetchBlob(filepath) {
  const { data, error } = await supabase.storage
    .from("reports")
    .download(filepath);

  if (error) {
    console.error;
  }
  return data;
}
