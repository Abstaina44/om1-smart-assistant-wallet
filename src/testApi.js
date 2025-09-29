// ------------------------------------------------------
// src/testApi.js
// Demo script to call the Express API endpoints
// ------------------------------------------------------
// Endpoints tested:
//   1. GET /balance   → Check wallet balance
//   2. POST /order    → Place an order & send payment
//   3. GET /tx/:hash  → Fetch transaction status
// ------------------------------------------------------

// Base URL of the running Express server
const API_URL = "http://localhost:3000";

/**
 * Test the /balance endpoint
 * Fetches current wallet balance from the server
 */
async function testBalance() {
  try {
    const res = await fetch(`${API_URL}/balance`);
    const data = await res.json();
    console.log("💰 Balance Response:", data);
  } catch (err) {
    console.error("❌ Error fetching balance:", err.message);
  }
}

/**
 * Test the /order endpoint
 * Simulates placing an order (like the assistant would)
 * @returns {string|null} Transaction hash if available
 */
async function testOrder() {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: "Coffee",   // Example order item (optional metadata)
        amount: "0.0001",  // Required: payment amount in ETH
        recipient: "0x9c8ba7b839DC1e9028c5d32f4180Be5Df099D78d" // Replace with merchant wallet address
      })
    });

    const data = await res.json();
    console.log("🛒 Order Response:", data);

    return data.txHash || null; // Return transaction hash if present
  } catch (err) {
    console.error("❌ Error placing order:", err.message);
    return null;
  }
}

/**
 * Test the /tx/:hash endpoint
 * Fetches transaction status by hash
 * @param {string} txHash - Ethereum transaction hash
 */
async function testTransaction(txHash) {
  try {
    const res = await fetch(`${API_URL}/tx/${txHash}`);
    const data = await res.json();
    console.log("🔍 Transaction Status:", data);
  } catch (err) {
    console.error("❌ Error fetching transaction:", err.message);
  }
}

/**
 * Run all tests in sequence:
 *   1. Get balance
 *   2. Place order
 *   3. Check transaction status (if tx hash available)
 */
(async () => {
  await testBalance();
  const txHash = await testOrder();
  if (txHash) {
    await testTransaction(txHash);
  }
})();
