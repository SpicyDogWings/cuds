
# Notes for alpha
## File
Take a reference to the file structure
```
[Desktop Entry]
Type=Application
Name=LibreSprite
Comment=App para hacer pixelart
Exec=/home/box/Programs/LibreSprite-x86_64.AppImage
Icon=/home/box/Pictures/icons/ase64.png
Terminal=false
```

## Colors
Take a reference to print a message with different colors
```ts
const message = info("Creador de Atajos de aplicaciones")
console.log('{' + message + '}');
```

## Types
Take a reference to the types
```ts
Interface File {
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
```
