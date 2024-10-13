import  { error, warn, success, info } from "./presets.ts";
import { colors } from "colors/cliffy";
import { Input, Select } from "prompt/cliffy";

//const message = info("Creador de Atajos de aplicaciones")
//console.log('{' + message + '}');

//[Desktop Entry]
//Type=Application
//Name=LibreSprite
//Comment=App para hacer pixelart
//Exec=/home/box/Programs/LibreSprite-x86_64.AppImage
//Icon=/home/box/Pictures/icons/ase64.png
//Terminal=false

const file = {
  type: {
    camp: "Type=",
    value: ""
  },
  version: {
    camp: "Version=",
    value: ""
  },
  name: {
    camp: "Name=",
    value: ""
  },
  comment: {
    camp: "Comment=",
    value: ""
  },
  exec: {
    camp: "Exec=",
    value: ""
  },
  icon: {
    camp: "Icon=",
    value: ""
  },
  terminal: {
    camp: "Terminal=",
    value: ""
  }
}

console.clear()
console.log(info("Creador de Atajos de aplicaciones"));
file.name.value = await Input.prompt("Nombre del atajo");
file.comment.value = await Input.prompt("Descripción");
file.exec.value = await Input.prompt("Ruta completa del ejecutable");
file.icon.value = await Input.prompt("Ruta completa del icono");
console.clear()
while (!file.name.value || !file.exec.value || !file.icon.value) {
  console.clear()
  if (!file.name.value) {
    console.log(warn(" ! Nombre del atajo vacio "));
    file.name.value = await Input.prompt("Nombre");
  }
  if (!file.exec.value) {
    console.log(warn(" ! Ruta del ejecutable vacia "));
    file.exec.value = await Input.prompt("Ejecutable");
  }
  if (!file.icon.value) {
    console.log(warn(" ! Ruta del icono vacia "));
    file.icon.value = await Input.prompt("Icono");
  }
}
// im here
console.clear()
let file = `[Desktop Entry]
Version=1.0
Type=Application
Name=${name}
Comment=${comment}
Exec=${exec}
Icon=${icon}
Terminal=false
`;
let fileName = `${name.toLowerCase().replace(/\s/g, "-")}.desktop`;
let confirmation: number = 0;
while (confirmation !== 5) {
  console.log(info("File:"), fileName);
  console.log(file);
  confirmation = await Select.prompt({
    message: "Editar",
    options: [
      { name: "Name", value: 1 },
      { name: "Comment", value: 2 },
      { name: "Exec", value: 3 },
      { name: "Icon", value: 4 },
      Select.separator("----------------"),
      { name: "Confirmar", value: 5 },
      { name: "Cancelar", value: 6 }
    ]
  })
  if (confirmation === 6) {
    break;
  } else if (confirmation === 1) {
    name = await Input.prompt("Nombre del atajo");
    fileName = `${name.toLowerCase().replace(/\s/g, "-")}.desktop`;
  } else if (confirmation === 2) {
    comment = await Input.prompt("Descripción");
  } else if (confirmation === 3) {
    exec = await Input.prompt("Ruta completa del ejecutable");
  } else if (confirmation === 4) {
    icon = await Input.prompt("Ruta completa del icono");
  } else {
    console.log(warn(" ! Opción invalida "));
  }
  file = `[Desktop Entry]
Version=1.0
Type=Application
Name=${name}
Comment=${comment}
Exec=${exec}
Icon=${icon}
Terminal=false
  `;
  console.clear()
}
if (confirmation === 6) {
  console.log(error(" x Cancelled, no se ha creado el archivo "));
  Deno.exit();
}
console.log(info("File generated"));
console.log(success(file));
const absHomeDir = Deno.env.get("HOME")!;
const path = `${absHomeDir}/.local/share/applications/${fileName}`;
await Deno.writeTextFile(path, file);
console.log(success("Archivo creado con éxito"));
