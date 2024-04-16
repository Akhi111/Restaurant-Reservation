import path from "path";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";



const app = express();
dotenv.config();

const __dirname = path.resolve();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/reservation", reservationRouter);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

dbConnection();

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
