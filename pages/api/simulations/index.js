import Simulations from "../../../models/Simulations";
import connectDB from "../../../lib/connectDB";

export default function handler(req, res) {
  connectDB();
  switch (req.method) {
    case "GET":
      return Simulations.find()
        .then((simulations) => res.status(200).json({ simulations }))
        .catch((error) => res.status(500).json({ message: "Something went wrong!", error }));
    case "POST":
      return Simulations.create({})
        .then((simulation) => res.status(200).json({ simulation }))
        .catch((error) => res.status(500).json({ message: "Something went wrong!", error }));
    default:
      return res.status(400).json({ message: `No ${req.method} path exists` });
  }
}
