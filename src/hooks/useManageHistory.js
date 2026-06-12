import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";
import { deletePdf } from "../utils/deletePdf";

export function useManageHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data, error } = await supabase
        .from("report_uploads")
        .select();
      if (error) {
        console.error(error)
        return
      }
      setHistory(data);
      setLoading(false);
    };
    fetchHistory();
  }, []);

  const deleteHistory = (filePath) => {
    deletePdf(filePath);
    setHistory(prev => prev.filter(report => report.file_path !== filePath));
  }

  return {history, loading, deleteHistory}
}
