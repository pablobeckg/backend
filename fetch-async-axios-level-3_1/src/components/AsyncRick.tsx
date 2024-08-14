import { useState } from "react";
import { IRick } from "../models/IRick";

const AsyncRick = () => {


  const [rick, setRick] = useState<IRick | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetchStatus, setFetchStatus] = useState<string>(
    "Before fetching Rick"
  );

  const RICK_URL = "https://rickandmortyapi.com/api/character/1";

  const asyncFetchRick = async () => {
    setRick(null);

    try {
        const response = await fetch(RICK_URL);
        if(!response.ok) {
            throw new Error();
        }
        const rick: IRick = await response.json();
        if(rick) {
            setRick(rick);
        setFetchStatus("Fetching Rick successful.");
        } else {
            throw new Error();
          }
    } catch (error) {
        console.error(error);
        setFetchStatus("Error loading Rick.");
    } finally {
        setLoading(false)
    }
    setFetchStatus('After async code.');
  }

  return (
    <div>
      <h2>Fetch Rick with Async</h2>
      <button onClick={asyncFetchRick} disabled={loading}>
        Fetch Rick
      </button>
      <p>Status: {fetchStatus}</p>
      {loading && <p>Loading...</p>}
      <h1>{rick?.name}</h1>
      <img src={rick?.image} alt="" />
    </div>
  );
}
 
export default AsyncRick;