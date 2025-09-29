// src/index.js
import express from "express";
import dotenv from "dotenv";
import { payMerchant, getBalance, getTransaction } from "./wallet.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

/**
 * @route GET /
 * @desc Basic health check
 */
app.get("/", (req, res) => {
  res.send("✅ OM1 Smart Assistant Wallet API is running!");
});

/**
 * @route POST /order
 * @desc Trigger a payment (user → assistant → wallet)
 * @body { amount: string, recipient: string }
 */
app.post("/order", async (req, res) => {
  try {
    const { amount, recipient } = req.body;

    if (!amount || !recipient) {
      return res.status(400).json({ error: "Amount and recipient are required" });
    }

    console.log(`⏳ Processing order → ${amount} ETH to ${recipient}...`);

    const txHash = await payMerchant(recipient, amount);

    return res.json({
      message: "✅ Payment initiated",
      transactionHash: txHash,
    });
  } catch (err) {
    console.error("❌ Error in /order:", err.message);
    res.status(500).json({ error: "Failed to process order" });
  }
});

/**
 * @route GET /balance
 * @desc Check wallet balance
 */
app.get("/balance", async (req, res) => {
  try {
    const balance = await getBalance();
    return res.json({ balance });
  } catch (err) {
    console.error("❌ Error in /balance:", err.message);
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

/**
 * @route GET /tx/:hash
 * @desc Get transaction status
 */
app.get("/tx/:hash", async (req, res) => {
  try {
    const { hash } = req.params;
    const txDetails = await getTransaction(hash);
    return res.json(txDetails);
  } catch (err) {
    console.error("❌ Error in /tx:", err.message);
    res.status(500).json({ error: "Failed to fetch transaction" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
