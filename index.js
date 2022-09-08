import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoute from './routes/Auth.js';
import postRoute from './routes/Post.js';
import tunelRoute from './routes/Tunel.js';
import cookieParser from 'cookie-parser'
import multer from "multer";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

app.use("/images", express.static(path.join(__dirname, "/images")));

const corsConfig = {
  origin: true,
  credentials: true,
};
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(cookieParser())
app.use(express.json())

  mongoose.connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to DB")
  })
  .catch((err) => {
    throw err
  })

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


app.use('/auth', authRoute);
app.use('/post', postRoute);
app.use('/tunel', tunelRoute);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('conectado');
});
