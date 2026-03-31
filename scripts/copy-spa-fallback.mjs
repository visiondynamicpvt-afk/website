import { access, copyFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const indexFile = path.join(distDir, "index.html");
const fallbackFiles = ["404.html", "200.html"];

await access(indexFile);

for (const fileName of fallbackFiles) {
  await copyFile(indexFile, path.join(distDir, fileName));
}