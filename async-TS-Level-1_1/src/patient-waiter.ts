export function waitForTwoSeconds(ms: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("Thank you for your patience");
      resolve();
    }, ms);
  });
}
