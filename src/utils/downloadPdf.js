import { supabase } from "../supabaseClient";

export async function downloadPdf(filepath, fileName) {

    const { data, error } = await supabase.storage
    .from("reports")
    .download(filepath);

    if (error) {
        console.error(error)
    }

    const url = URL.createObjectURL(data);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();

    URL.revokeObjectURL(url);
}
