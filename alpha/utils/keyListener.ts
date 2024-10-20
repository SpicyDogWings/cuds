import { keypress } from "keypress/cliffy";

export default async () => {
  let key;
  for await (const event of keypress()) {
    key = event.key;
    break;
  }
  return key;
};
