export const message: string = "Hello World!";

export function showMessage(message: string, count: number) {
  for (let i = 0; i < count; i++) {
    console.log(`${i}) ${message}`);
  }

}
