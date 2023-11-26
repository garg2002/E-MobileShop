import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://satyamgarg1308:Satyam1308@cluster0.qazyoyq.mongodb.net/";

  mongoose
    .connect(connectionUrl, configOptions)
    .then(() => {
      console.log("E-commerce database connected successfully");
    })
    .catch((error) => {
      console.log(`Failed to connect to the database ${error}`);
    });
};

export default connectToDB;
