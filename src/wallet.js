// src/wallet.js
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

// Setup provider & wallet
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

/**
 * Send ETH to a recipient
 * @param {string} recipient - Recipient wallet address
 * @param {string} amount - ETH amount as string
 */
export async function payMerchant(recipient, amount) {
  const tx = await wallet.sendTransaction({
    to: recipient,
    value: ethers.parseEther(amount),
  });

  console.log(`✅ Transaction sent! Hash: ${tx.hash}`);
  return tx.hash;
}

/**
 * Get current wallet balance
 */
export async function getBalance() {
  const balance = await provider.getBalance(wallet.address);
  return ethers.formatEther(balance);
}

/**
 * Get transaction details by hash
 * @param {string} hash
 */
export async function getTransaction(hash) {
  const tx = await provider.getTransaction(hash);
  if (!tx) return { status: "not found" };

  return {
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    value: ethers.formatEther(tx.value),
    blockNumber: tx.blockNumber,
  };
}