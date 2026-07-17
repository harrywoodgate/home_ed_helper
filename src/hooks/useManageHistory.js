import { useState } from "react";
import { supabase } from "../supabaseClient";
import { deletePdf } from "../utils/deletePdf";
import { uploadPdf } from "../utils/uploadPdf";
import { useEffect } from "react";
import { getWeekDates } from "../utils/getWeekDates";

export function useManageHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [week, setWeek] = useState(getWeekDates(2026)[0]);

  const weekFilter = week.map((date) => `file_name.like.%${date}%`).join(",");

  useEffect(() => {
    const fetchHistory = async () => {
      const { data, error } = await supabase
        .from("report_uploads")
        .select("id, file_path, file_name")
        .or(weekFilter);
      if (error) {
        console.error(error);
        return;
      }
      setHistory(data);
      setLoading(false);
    };
    fetchHistory();
  }, [week, weekFilter]);

  const deleteHistory = (filePath) => {
    deletePdf(filePath);
    setHistory((prev) => prev.filter((report) => report.file_path != filePath));
  };

  const addHistory = async (document, fileName) => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return;
    const filePath = `${user.id}/${Date.now()}-${fileName}.pdf`;
    uploadPdf(document, fileName, user.id, filePath);

    setHistory((prev) => [
      ...prev,
      { id: user.id, file_path: filePath, file_name: fileName },
    ]);
  };

  return { history, loading, deleteHistory, addHistory, setWeek };
}
