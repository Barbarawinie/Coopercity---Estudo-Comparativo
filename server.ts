import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Increase payload limit to support base64 image uploads
  app.use(express.json({ limit: "20mb" }));

  const logosDir = path.join(process.cwd(), "public", "logos");
  if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
  }

  // API endpoint to save uploaded logos directly to /public/logos/
  app.post("/api/save-logo", (req, res) => {
    try {
      const { key, dataUrl } = req.body;

      if (!key || !dataUrl) {
        return res.status(400).json({ error: "Missing key or dataUrl" });
      }

      let extension = "png";
      let buffer: Buffer;

      if (dataUrl.startsWith("data:image/svg+xml")) {
        extension = "svg";
        const base64Index = dataUrl.indexOf(";base64,");
        if (base64Index !== -1) {
          const base64Data = dataUrl.substring(base64Index + 8);
          buffer = Buffer.from(base64Data, "base64");
        } else {
          // UTF-8 encoded SVG string
          const svgContent = decodeURIComponent(
            dataUrl.replace(/^data:image\/svg\+xml;utf8,/, "").replace(/^data:image\/svg\+xml,/, "")
          );
          buffer = Buffer.from(svgContent, "utf-8");
        }
      } else {
        const matches = dataUrl.match(/^data:image\/([a-zA-Z0-9\+\-]+);base64,(.+)$/);
        if (matches) {
          const mimeExt = matches[1].toLowerCase();
          extension = mimeExt === "jpeg" ? "jpg" : mimeExt;
          buffer = Buffer.from(matches[2], "base64");
        } else {
          // Default fallback to base64 stripping
          const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, "");
          buffer = Buffer.from(base64Data, "base64");
        }
      }

      // Remove existing logo files for this key with other extensions
      const possibleExts = ["png", "jpg", "jpeg", "svg", "webp"];
      possibleExts.forEach((ext) => {
        const oldFile = path.join(logosDir, `${key}.${ext}`);
        if (fs.existsSync(oldFile)) {
          try {
            fs.unlinkSync(oldFile);
          } catch (err) {
            console.error(`Failed to delete old file ${oldFile}:`, err);
          }
        }
      });

      const fileName = `${key}.${extension}`;
      const filePath = path.join(logosDir, fileName);
      fs.writeFileSync(filePath, buffer);

      const publicPath = `/logos/${fileName}`;
      console.log(`Saved logo for key '${key}' to disk: ${filePath}`);

      return res.json({
        success: true,
        key,
        fileName,
        logoUrl: `${publicPath}?t=${Date.now()}`,
      });
    } catch (error: any) {
      console.error("Error saving logo:", error);
      return res.status(500).json({ error: error?.message || "Failed to save logo to disk" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
