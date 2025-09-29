// src/testTx.js
// -----------------------------------------------------------
// Test Transaction Script
// Sends a small test ETH transfer from your wallet to the
// merchant address defined in your .env file.
// -----------------------------------------------------------

// Import required libraries
import { ethers } from "ethers";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Read sensitive values from environment variables
const rpcUrl = process.env.RPC_URL;                 // Ethereum RPC endpoint (Sepolia testnet)
const privateKey = process.env.PRIVATE_KEY;         // Test wallet private key (⚠️ NEVER use a real one here)
const merchant = process.env.MERCHANT_ADDRESS;      // Recipient address (test merchant)

// Main execution function
async function main() {
  // Connect to blockchain provider (Sepolia testnet RPC)
  const provider = new ethers.JsonRpcProvider(rpcUrl);

  // Load wallet from private key and connect it to the provider
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log("👛 Wallet Address:", wallet.address);

  // Build a simple ETH transfer transaction
  const tx = {
    to: merchant,                     // Recipient address
    value: ethers.parseEther("0.00001") // Amount in ETH (0.00001 test ETH)
  };

  console.log("⏳ Sending transaction...");

  // Sign and broadcast the transaction
  const sentTx = await wallet.sendTransaction(tx);

  console.log("✅ Transaction sent! Hash:", sentTx.hash);

  // Wait until the transaction is confirmed in a block
  const receipt = await sentTx.wait();

  console.log("🎉 Transaction confirmed in block:", receipt.blockNumber);
}

// Run the script and handle errors gracefully
main().catch((err) => {
  console.error("❌ Error sending transaction:", err);
});
