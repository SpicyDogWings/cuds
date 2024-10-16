import { Input } from "prompt/cliffy";
import { keypress, KeyPressEvent } from "keypress/cliffy";
import { File } from "./types.ts";
import { info, warning, success } from "./presets.ts";
import printFile from "./utils/printFile.ts";
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
let key = "0";
while (true) {
  printFile(file);
  if (!key) {
    console.log(warning("Invalid key"));
  } else {
    console.log()
  }
  console.log()
  console.log()
  console.log('press "?" if need help')
  for await (const event: KeyPressEvent of keypress()) {
    if (event.key === "n") {
      key = "n";
      break;
    } else if (event.key === "c") {
      key = "c";
      break;
    } else if (event.key === "e") {
      key = "e";
      break;
    } else if (event.key === "i") {
      key = "i";
      break;
    } else if (event.key === "?") {
      key = "?";
      break;
    } else if (event.key === "w") {
      key = "w";
      break;
    } else if (event.key === "q") {
      key = "q";
      break;
    } else {
      key = undefined;
      break;
    }
  }
  console.clear();
  if (key === "n") {
    file.name.value = await Input.prompt("Nombre del atajo");
  } else if (key === "c") {
    file.comment.value = await Input.prompt("Descripción"); 
  } else if (key === "e") {
    file.exec.value = await Input.prompt("Path to bin"); 
  } else if (key === "i") {
    file.icon.value = await Input.prompt("Path to icon");
  } else if (key === "?") {
    console.clear()
    console.log(`


┌───Options───────┐  
│                 │─┐
│  n. Name        │ │
│  c. Comment     │ │
│  e. Exec        │ │
│  i. Icon        │ │
│                 │ │
│  w. Write       │ │
│  q. Quit        │ │
│                 │ │
└─────────────────┘ │
 └──────────────────┘


    `)
    console.log("q: return to main menu")
    for await (const event: KeyPressEvent of keypress()) {
      if (event.key === "q"){
        break;
      }
    }
  } else if (key === "w") {
    const final = genFile(file);
    console.log(success("File generated"));
    console.log(final);
    let fileName = file.name.value ? file.name.value : "undefined";
    fileName = `${fileName.toLowerCase().replace(/\s/g, "-")}.desktop`;
    const absHomeDir = Deno.env.get("HOME")!;
    const path = `${absHomeDir}/.local/share/applications/${fileName}`;
    await Deno.writeTextFile(path, final);
    Deno.exit(1);
  } else if (key === "q") {
    Deno.exit(1);
  }
  console.clear();
}
