import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection fail", err);
  });

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error with express", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error: ", error);
//     throw error;
//   }
// })();
