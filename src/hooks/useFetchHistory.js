import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabaseClient";

export function useFetchHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noHistory, setNoHistory] = useState(false)

  useEffect(() => {
    const fetchHistory = async () => {
      const { data, error } = await supabase
        .from("report_uploads")
        .select();
      if (error) {
        console.error(error)
        return
      }
      data.length === 0 ? setNoHistory(true) : setHistory(data);
      setLoading(false);
    };

    fetchHistory();
  }, []);

  return {history, loading, noHistory}
}
