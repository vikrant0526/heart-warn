import connectDB from "../../../lib/connectDB";
import User from "../../../models/Users";
export default function handler(req, res) {
  connectDB();
  switch (req.method) {
    case "GET":
      return User.findById(req.query.id)
        .then((user) => res.status(200).json({ user }))
        .catch((error) => res.status(500).json({ message: "Something went wrong!", error }));
    case "PATCH":
      return User.findByIdAndUpdate(req.query.id, req.body?.personalInformation, { new: true })
        .then((user) => res.status(200).json({ user }))
        .catch((error) => res.status(500).json({ message: "Something went wrong!", error }));
    default:
      return res.status(400).json({ message: `No ${req.method} path exists` });
  }
}
