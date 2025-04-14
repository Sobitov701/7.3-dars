import { useEffect, useState } from "react";
import { axiosInstance } from "../utils";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fechData = async () => {
      setIsPending(true);
      try {
        const req = await axiosInstance(url);
        setData(req);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsPending(false);
      }
    };

    fechData();
  }, [url]);
  return { data, isPending, error };
}

export default UseFetch;
