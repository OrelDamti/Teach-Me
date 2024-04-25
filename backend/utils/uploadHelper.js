import multer from "multer";
import path from "path";
import { promises as fs } from "fs";
import * as url from "url";
// Configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const basePath = url.fileURLToPath(import.meta.url);
    const uploadsFolder = path.join(basePath, "../../", "uploads");
    // Ensure the imageUpload folder exists
    fs.mkdir(uploadsFolder, { recursive: true })
      .then(() => cb(null, uploadsFolder))
      .catch((err) => {
        console.error(err);
        cb(err);
      });
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname); // Use original filename added date to make it unique
  },
});

const upload = multer({ storage: storage });



export default upload;
