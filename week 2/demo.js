const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Directory to serve files from
const filesDirectory = path.join(__dirname, "files");

// Middleware to make the "files" directory publicly accessible
app.use("/files", express.static(filesDirectory));

// API to list all files in the directory
app.get("/list-files", (req, res) => {
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Unable to read files." });
    }
    res.json({ files });
  });
});

// API to read a specific file
app.get("/read-file/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(filesDirectory, filename);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(404).json({ error: "File not found." });
    }
    res.send(data);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
