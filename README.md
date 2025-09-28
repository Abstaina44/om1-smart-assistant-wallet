# 🟢 OM1 + Smart Assistant + Wallet Payments  

This project integrates **OM1** with a **Smart Assistant** (e.g., Alexa, Siri, Home Assistant) to help users place orders or trigger actions, with payments securely processed via a connected crypto wallet (e.g., Coinbase).  

It demonstrates how AI assistants can interact with blockchain wallets for **autonomous, secure, and transparent payments**.  

---

## ✨ Features  

- **Smart Assistant Integration**  
  - OM1 communicates with a smart assistant to place orders or trigger actions.  

- **Wallet-Based Payments**  
  - Payments are executed securely via a connected crypto wallet.  
  - Transaction status (**success, pending, failed**) is reported back to the user.  

- **End-to-End Workflow**  
  1. User requests order via smart assistant.  
  2. OM1 communicates with the assistant.  
  3. Payment is processed via wallet.  
  4. Confirmation is received and reported back.  

# OM1 Smart Assistant Wallet

This repository contains the backend implementation for the OM1 Smart Assistant Wallet, a proof-of-concept that integrates voice commands with on-chain cryptocurrency transactions. It demonstrates how a decentralized security monitoring engine can be used for real-time payments initiated through a simple conversational interface.

---

## 💡 Example Workflow

The core function of this project is to link a voice command to an on-chain transaction.

1.  **User Request:** A user issues a voice command, e.g., "Hey Alexa, order me a coffee."
2.  **Assistant & OM1:** The Smart Assistant receives the request, relays it to the Express server, which then interfaces with the OM1 API.
3.  **Payment Initiation:** A crypto payment is initiated from the configured testnet wallet to the Merchant's address.
4.  **Status Return:** The transaction status (`✅ success / ⏳ pending / ❌ failed`) is returned to the user via the Smart Assistant.

## 🛠️ Setup

To get the server up and running, follow these steps:

### 1. Clone the Repository

Open your terminal and clone the project:

```bash
git clone [https://github.com/YOUR_USERNAME/om1-smart-assistant-wallet.git](https://github.com/YOUR_USERNAME/om1-smart-assistant-wallet.git)
cd om1-smart-assistant-wallet
````

### 2\. Install Dependencies

Install the necessary Node.js packages:

```bash
npm install
```

### 3\. Configure Environment Variables

Create a file named `.env` in the root directory of the project. This file holds your sensitive credentials and configuration settings.

**⚠️ Important Security Note:**

  * **DO NOT** commit your `.env` file to GitHub.
  * **DO NOT** use a private key for a wallet holding real assets. **Use ONLY testnet credentials.**

The `.env` file must contain the following variables:

```ini
PORT=3000
OM1_API_URL=[https://api.om1.example](https://api.om1.example)
OM1_API_KEY=sk-xxxx
RPC_URL=[https://rpc.sepolia.org](https://rpc.sepolia.org)         # Your Ethereum Testnet RPC endpoint
PRIVATE_KEY=0xYOUR_TEST_PRIVATE_KEY     # Use ONLY a testnet wallet key
MERCHANT_ADDRESS=0xMERCHANT_TEST_ADDR   # Testnet wallet address that receives payments
```

## 🚀 Run the Server

Start the Express server using the following command:

```bash
npm start
```

If the setup is successful, you will see a confirmation message in the terminal:

```
[dotenv@17.2.2] injecting env (6) from .env
🚀 Server running on http://localhost:3000
```

## 📂 Project Structure

| File / Folder | Description |
| :--- | :--- |
| `src/` | Primary source code folder. |
| `src/index.js` | Entry point for the application (Express server setup). |
| `src/wallet.js` | Core logic for handling crypto wallet transactions and OM1 interaction. |
| `.env` | Environment variables (excluded from version control). |
| `package.json` | Project metadata and dependency list. |
| `README.md` | This project documentation. |

## 📹 Demo Requirements (For Bounty Submission)

If submitting this implementation as part of a bounty or challenge, please ensure you meet the following requirements:

1.  **Provide a demo video** clearly showing the end-to-end workflow (voice command $\rightarrow$ payment $\rightarrow$ status return).
2.  **Post your implementation** on Twitter/X and tag the relevant team/protocol accounts.
3.  **Submit your contribution** via a GitHub Issue or Pull Request (PR) and include the following details in your submission:

| Detail | Example |
| :--- | :--- |
| **🏠 Assistant Integrated:** | `e.g., Alexa, Siri, Home Assistant` |
| **🚀 Post Link:** | `[Link to your Twitter/X post]` |
| **🎥 Demo Video:** | `[YouTube/Drive link to your video]` |

## 🤝 Contribution

Contributions are welcome\! Please ensure your code remains:

  * **Modular:** Clearly separate wallet, API, and server logic.
  * **Well-Documented:** Use inline comments for complex sections.
  * **PR Ready:** Open a Pull Request for review and submission.

For discussion and support, please join our community channels (Discord/Telegram).

## 📜 License

This project is licensed under the **MIT License**.

```Made with 💜 by 0xe.eph Ephraim
```