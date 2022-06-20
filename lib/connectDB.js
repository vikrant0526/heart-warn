import { connect, connection } from "mongoose";

const connectDB = () => {
  if (!connection.readyState) connect(process.env.MONGODB_URI);
};

export default connectDB;
