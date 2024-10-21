import { File } from "../types/File.ts";

export default (file: File) => {
  const tempFile = `[Desktop Entry]
Version=1.0
Type=Application
Name=${file.name.value}
Comment=${file.comment.value}
Exec=${file.exec.value}
Icon=${file.icon.value}
Terminal=false
`;
  return tempFile;
};
