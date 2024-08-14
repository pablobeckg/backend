export function runDistance(description: string): Promise<string> {
  return new Promise((resolve) => {
    const minutes = Math.floor(Math.random() * (90 - 25 + 1)) + 25;
    const waitTime = minutes * 100;

    setTimeout(() => {
      resolve(`${description}: ${minutes}`);
    }, waitTime);
  });
}

export function warmUp(): Promise<number> {
  return new Promise((resolve) => {
    const minutes = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const waitTime = minutes * 100;
    setTimeout(() => {
      resolve(minutes);
    }, waitTime);
  });
}

export function coolDown(): Promise<number> {
  return new Promise((resolve) => {
    const minutes = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
    const waitTime = minutes * 100;
    setTimeout(() => {
      resolve(minutes);
    }, waitTime);
  });
}
