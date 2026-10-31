import fs from "node:fs";
import path from "node:path";

const targetDir = path.resolve(".output/public");
const basePath = process.env.BASE_PATH || "/";

if (basePath !== "/" && fs.existsSync(targetDir)) {
  function processDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        processDirectory(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith(".html") || entry.name.endsWith(".js") || entry.name.endsWith(".css"))) {
        let content = fs.readFileSync(fullPath, "utf-8");
        let updated = content
          .replaceAll('src="/images/', `src="${basePath}images/`)
          .replaceAll('href="/images/', `href="${basePath}images/`)
          .replaceAll('"/images/', `"${basePath}images/`)
          .replaceAll("'/images/", `'${basePath}images/`)
          .replaceAll('src="/videos/', `src="${basePath}videos/`)
          .replaceAll('"/videos/', `"${basePath}videos/`)
          .replaceAll('href="/favicon.ico"', `href="${basePath}favicon.ico"`);
        if (updated !== content) {
          fs.writeFileSync(fullPath, updated, "utf-8");
        }
      }
    }
  }
  processDirectory(targetDir);
  console.log(`Updated asset paths with base path: ${basePath}`);
}
