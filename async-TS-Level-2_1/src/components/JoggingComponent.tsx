import React, { useState } from "react";
import { coolDown, runDistance, warmUp } from "../assets/jogging";

const JoggingComponent: React.FC = () => {
  const [warmUpTime, setWarmUpTime] = useState<number | null>(null);
  const [runDescriptionAndTime, setRunDescriptionAndTime] = useState<
    string | null
  >(null);
  const [coolDownTime, setCoolDownTime] = useState<number | null>(null);
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const [status, setStatus] = useState<string>("Bereit zum Start");

  const startJogging = async () => {
    setStatus("Wärme-Up wird durchgeführt...");
    try {
      const warmUpDuration = await warmUp();
      setWarmUpTime(warmUpDuration);

      setStatus("Jogging wird durchgeführt...");

      const runResult = await runDistance("Lockeres Laufen im Park");
      
      const [description, runTimeStr] = runResult.split(": ");
      const runTime = parseInt(runTimeStr);
      setRunDescriptionAndTime(`${description}: ${runTime}`);

      setStatus("Cool-Down wird durchgeführt...");
      const coolDownDuration = await coolDown();
      setCoolDownTime(coolDownDuration);

      const total = warmUpDuration + runTime + coolDownDuration;
      setTotalTime(total);

      setStatus("Fertig!");
    } catch (error) {
      setStatus("Fehler beim Joggen.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Jogging Tracker</h2>
      <button onClick={startJogging}>Start Jogging</button>
      <p>Status: {status}</p>
      {warmUpTime !== null && <p>Warm-Up: {warmUpTime} Minuten</p>}
      {runDescriptionAndTime !== null && <p>{runDescriptionAndTime} Minuten</p>}
      {coolDownTime !== null && <p>Cool-Down: {coolDownTime} Minuten</p>}
      {totalTime !== null && <p>Gesamtzeit: {totalTime} Minuten</p>}
    </div>
  );
};

export default JoggingComponent;
