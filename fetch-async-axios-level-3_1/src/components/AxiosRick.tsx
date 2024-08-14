import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { IRick } from "../models/IRick";

const AxiosRick = () => {
  const [rick, setRick] = useState<IRick | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchStatus, setFetchStatus] = useState<string>(
    "Before fetching Rick"
  );
  const RICK_URL = "https://rickandmortyapi.com/api/character/1";

  const axiosFetchRick = () => {
    axios
      .get(RICK_URL)
      .then((response: AxiosResponse<IRick>) => {
        const rick: IRick = response.data;
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
    setFetchStatus("After async code.");
  };

  return (
    <div>
      <h2>Fetch Rick with Axios</h2>
      <button onClick={axiosFetchRick} disabled={loading}>
        Fetch Rick
      </button>
      <p>Status: {fetchStatus}</p>
      {loading && <p>Loading...</p>}
      <h1>{rick?.name}</h1>
      <img src={rick?.image} alt="" />
    </div>
  );
};

export default AxiosRick;
