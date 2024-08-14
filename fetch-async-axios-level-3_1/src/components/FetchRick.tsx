import { useState } from "react";
import { IRick } from "../models/IRick";

const FetchRick = () => {
  const [rick, setRick] = useState<IRick | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchStatus, setFetchStatus] = useState<string>(
    "Before fetching Rick"
  );

  const RICK_URL = "https://rickandmortyapi.com/api/character/1";

  const fetchRick = () => {
    setRick(null);

    fetch(RICK_URL)
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((rick: IRick) => {
        setRick(rick);
        setFetchStatus("Fetching Rick successful.");
      })
      .catch((error) => {
        console.error(error);
        setFetchStatus("Error loading Rick.");
      })
      .finally(() => {
        setLoading(false);
      });
      setFetchStatus('After async code.');
  };

  return (
    <div>
      <h2>Fetch Rick with Fetch</h2>
      <button onClick={fetchRick} disabled={loading}>
        Fetch Rick
      </button>
      <p>Status: {fetchStatus}</p>
      {loading && <p>Loading...</p>}
      <h1>{rick?.name}</h1>
      <img src={rick?.image} alt="" />
    </div>
  );
};

export default FetchRick;
