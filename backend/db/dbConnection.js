import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Reservations",
    })
    .then(() => {
      console.log("Connected to db Successfully!");
    })
    .catch((error) => {
      console.log(`Some error occure while connecting to db! ${error}`);
    });
};
