import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";

export function useFetchHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data, error } = await supabase
        .from("report_uploads")
        .select("uploaded_at");
      if (error) {
        console.error(error)
        return
      }
      setHistory(data)
      console.log(data)
    };

    fetchHistory();
  }, []);

  return {history}
}
