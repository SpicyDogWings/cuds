import { Input, Toggle } from "prompt/cliffy";
import { File } from "./types/File.ts";
import { warning, success, title } from "./presets.ts";
import { spacer } from "./config.ts";
import keyListener from "./utils/keyListener.ts";
import printFile from "./utils/printFile.ts";
import printHelp from "./utils/printHelp.ts";
import genFile from "./utils/genFile.ts";

const file: File = {
  type: { key: "Type", value: "Application" },
  version: { key: "Version", value: "1.0" },
  name: { key: "Name" },
  comment: { key: "Comment" },
  exec: { key: "Exec" },
  icon: { key: "Icon" },
  terminal: { key: "Terminal", value: false },
};
console.clear();
let key: string | undefined = "0";
while (true) {
  console.log(title("  File preview  "));
  console.log();
  printFile(file);
  if (!key) {
    console.log(spacer, warning("Invalid key"));
  } else {
    console.log();
  }
  console.log();
  key = await keyListener();
  console.clear();
  if (key === "n") {
    file.name.value = await Input.prompt("Nombre del atajo");
  } else if (key === "c") {
    file.comment.value = await Input.prompt("Descripción");
  } else if (key === "e") {
    file.exec.value = await Input.prompt("Path to script");
  } else if (key === "i") {
    file.icon.value = await Input.prompt("Path to icon");
  } else if (key === "y") {
    file.type.value = await Input.prompt("Show application?");
  } else if (key === "t") {
    file.terminal.value = await Toggle.prompt("Show terminal?");
  } else if (key === "v") {
    file.version.value = await Input.prompt("Show terminal?");
  } else if (key === "?") {
    await printHelp();
  } else if (key === "w") {
    const final = genFile(file);
    console.log(spacer, success("File generated"));
    let fileName = file.name.value ? file.name.value : "undefined";
    fileName = `${fileName.toLowerCase().replace(/\s/g, "-")}.desktop`;
    const absHomeDir = Deno.env.get("HOME")!;
    const path = `${absHomeDir}/.local/share/applications/${fileName}`;
    await Deno.writeTextFile(path, final);
    Deno.exit(1);
  } else if (key === "q") {
    Deno.exit(1);
  } else {
    key = undefined;
  }
  console.clear();
}
