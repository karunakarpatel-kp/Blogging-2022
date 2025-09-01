import fs from "fs";
import path from "path";

export function generateAppRoutes(appDir: string = path.join(process.cwd(), "app")) {
  const routes: any[] = [];
  let idCounter = 0;

  function walk(dir: string) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !file.startsWith("_")) {
        // Check if this folder has a page
        const hasPage = fs.existsSync(path.join(fullPath, "page.tsx")) || fs.existsSync(path.join(fullPath, "page.js"));

        if (hasPage) {
          // Try to read meta.json
          let meta: any = {};
          const metaPath = path.join(fullPath, "meta.json");
          if (fs.existsSync(metaPath)) {
            try {
              meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
            } catch (err) {
              console.warn(`Failed to parse meta.json for ${file}:`, err);
            }
          }

          const url = `https://www.karunakarpatel.com/apps/${file}`;

          routes.push({
            id: idCounter++,
            url,
            title: meta.title || file,
            description: meta.description || "",
            lastUpdateTime: meta.lastUpdateTime || "",
            publishedTime: meta.publishedTime || "",
            tags: meta.tags || [],
            featuredImage: meta.featuredImage || "",
            featuredImageAltText: meta.featuredImageAltText || "",
            ogImageURL: meta.ogImageURL || "",
          });
        }

        // Recurse into subfolders
        walk(fullPath);
      }
    });
  }

  walk(appDir);
  return routes;
}

// Generate routes
const appRoutes = generateAppRoutes();
fs.writeFileSync("appRoutes.json", JSON.stringify(appRoutes, null, 2));
console.log("App routes generated successfully!");
