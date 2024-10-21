import { spacer } from "../config.ts";
import { Keys } from "../types/Keys.ts";
import keyListener from "./keyListener.ts";
import { warning, title } from "../presets.ts";

export default async () => {
  let key: string | undefined = "0";
  const keyList: Keys[] = [
    { key: "y", label: "Type" },
    { key: "v", label: "Vaersion" },
    { key: "n", label: "Name" },
    { key: "c", label: "Comment" },
    { key: "e", label: "Exec" },
    { key: "i", label: "Icon" },
    { key: "t", label: "Terminal" },
    { key: "w", label: "Write" },
    { key: "q", label: "Quit" },
  ];
  while (true) {
    console.clear();
    console.log(title("  Options  "));
    console.log();
    for (const key of keyList) {
      console.log(spacer, key.key + "  " + key.label);
    }
    if (!key) {
      console.log(spacer, warning("Invalid key"));
    } else {
      console.log();
    }
    console.log();
    console.log(spacer, "enter/return: return to main menu");
    key = await keyListener();
    if (key === "return") {
      return;
    } else {
      key = undefined;
    }
  }
};
