import "./style.css";
import { waitForTwoSeconds } from "./patient-waiter.ts";

async function main() {
  console.log("Hi, here I am...");
  waitForTwoSeconds(2000);
  console.log("Hello...")
  console.log("Can you hear me...")
}

main()

