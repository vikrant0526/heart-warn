import Simulations from "../../../models/Simulations";
import connectDB from "../../../lib/connectDB";

export default function handler(req, res) {
  connectDB();
  switch (req.method) {
    case "GET":
      return Simulations.find()
        .then((simulations) => res.status(200).json({ simulations }))
        .catch((error) => res.status(500).json({ message: "Something went wrong!", error }));
    case "PATCH":
      let BPMs = [];
      variations.forEach((variation) => {
        const variationBPMs = [];
        for (let i = 0; i < 10; i++) {
          variationBPMs[i] =
            Math.floor(Math.random() * (variation.upper - variation.lower)) + variation.lower;
        }
        BPMs = [...BPMs, ...variationBPMs];
        console.log();
      });
      return Simulations.findByIdAndUpdate(req.query.id, { BPMs }, { new: true })
        .then((simulation) => res.status(200).json(simulation))
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Something went wrong!", error });
        });

    default:
      return res.status(400).json({ message: `No ${req.method} path exists` });
  }
}

// Sim 1
// const variations = [
//   { lower: 80, upper: 85 },
//   { lower: 85, upper: 90 },
//   { lower: 90, upper: 95 },
//   { lower: 90, upper: 95 },
//   { lower: 85, upper: 90 },
//   { lower: 90, upper: 95 },
//   { lower: 95, upper: 100 },
//   { lower: 90, upper: 95 },
//   { lower: 85, upper: 90 },
//   { lower: 80, upper: 85 },
//   { lower: 85, upper: 90 },
//   { lower: 90, upper: 95 },
// ];

// Sim 2
// const variations = [
//   { lower: 80, upper: 85 },
//   { lower: 75, upper: 80 },
//   { lower: 75, upper: 80 },
//   { lower: 70, upper: 75 },
//   { lower: 65, upper: 70 },
//   { lower: 65, upper: 70 },
//   { lower: 60, upper: 65 },
//   { lower: 55, upper: 60 },
//   { lower: 55, upper: 60 },
//   { lower: 55, upper: 60 },
//   { lower: 60, upper: 65 },
//   { lower: 60, upper: 65 },
// ];

// Sim 3
// const variations = [
//   { lower: 80, upper: 85 },
//   { lower: 85, upper: 90 },
//   { lower: 90, upper: 95 },
//   { lower: 90, upper: 95 },
//   { lower: 95, upper: 100 },
//   { lower: 95, upper: 100 },
//   { lower: 100, upper: 103 },
//   { lower: 103, upper: 105 },
//   { lower: 105, upper: 107 },
//   { lower: 107, upper: 110 },
//   { lower: 110, upper: 115 },
//   { lower: 113, upper: 120 },
// ];
