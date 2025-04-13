import { useEffect, useState } from "react";
import AxiosInstance from "../utils/index";

function UseFetch() {
  const { data, setData } = useState(null);
  const { isPending, setIsPending } = useState(false);
  const { error, setError } = useState(false);

  useEffect(() => {
    const fechData = async () => {
      setIsPending(true);
      try {
        const req = await AxiosInstance(url);
        setData(req);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsPending(false);
      }
    };
  }, [url]);
  return { data, isPending, error };
}

export default UseFetch;
