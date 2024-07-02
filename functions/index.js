import functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";
import serviceAccount from "./serviceAccountKey.json";

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors({ origin: true }));

// Sample data
const properties = [
  {
    id: 1,
    propertyTitle: "Luxury Beachfront Villa",
    propertyImage: "https://i.ibb.co/P4cs7KM/p-1.png",
    minPriceRange: "$500,000",
    maxPriceRange: "$750,000",
    description:
      "Exquisite beachfront villa with breathtaking ocean views and premium amenities. Experience luxury living by the sea.",
    location: "Coastal Paradise",
    status: "For Sale",
  },
  // Add other properties here
];

// Route to get properties
app.get("/properties", (req, res) => {
  res.json(properties);
});

// Expose Express API as a single Cloud Function:
export const api = functions.https.onRequest(app);
