import express from "express";
import cors from "cors";
import { router } from "./notifications/routes"; // Burada named import kullanıyoruz.
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/notifications", router);  // router'ı "/notifications" altında kullanıyoruz.

const init = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/myDatabase');
    console.info("MongoDB bağlantısı başarılı");
  } catch (error) {
    console.error("MongoDB bağlantısı başarısız: ", error);
  }
};

init().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
