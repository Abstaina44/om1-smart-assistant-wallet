// src/index.js
import express from "express";
import dotenv from "dotenv";
import { payMerchant } from "./wallet.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Basic health route
app.get("/", (req, res) => {
  res.send("✅ OM1 Smart Assistant Wallet running!");
});

// Example payment endpoint
app.get("/pay", async (req, res) => {
  try {
    const txHash = await payMerchant("0.01"); // send 0.01 ETH
    res.send(`Payment sent! Tx hash: ${txHash}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Payment failed!");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});