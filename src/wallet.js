// src/wallet.js
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

// Setup provider + wallet
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const merchant = process.env.MERCHANT_ADDRESS;

/**
 * Send ETH payment to merchant
 * @param {string} amount - ETH amount (as string, e.g. "0.01")
 */
export async function payMerchant(amount) {
  console.log(`💸 Sending ${amount} ETH to ${merchant}...`);

  const tx = await wallet.sendTransaction({
    to: merchant,
    value: ethers.parseEther(amount),
  });

  console.log("⛓️ Tx sent:", tx.hash);
  await tx.wait(); // wait for confirmation
  console.log("✅ Tx confirmed!");

  return tx.hash;
}
