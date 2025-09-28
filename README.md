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

---

## 🛠️ Setup  

### 1. Clone the Repository  
```bash
git clone https://github.com/YOUR_USERNAME/om1-smart-assistant-wallet.git
cd om1-smart-assistant-wallet

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a .env file in the project root:

PORT=3000
OM1_API_URL=https://api.om1.example
OM1_API_KEY=sk-xxxx
RPC_URL=https://rpc.sepolia.org   # Testnet RPC endpoint
PRIVATE_KEY=0xYOUR_TEST_PRIVATE_KEY   # Use ONLY a testnet wallet key
MERCHANT_ADDRESS=0xMERCHANT_TEST_ADDR # Wallet address that receives payments


⚠️ Important:

Do not commit your real private keys.

Use only testnet credentials for development and testing.

🚀 Run the Server

Start the server:

npm start


If successful, you should see:
[dotenv@17.2.2] injecting env (6) from .env
🚀 Server running on http://localhost:3000 


# OM1 Smart Assistant Wallet

## 📂 Project Structure

| File / Folder       | Description                                           |
|--------------------|-------------------------------------------------------|
| `src/`             | Source code folder                                    |
| `src/index.js`     | Entry point (Express server setup)                   |
| `src/wallet.js`    | Handles wallet transactions                           |
| `.env`             | Environment variables (not committed to GitHub)     |
| `package.json`     | Project metadata and dependencies                     |
| `README.md`        | Project documentation                                 |


🧪 Example Workflow

1.User: "Hey Alexa, order me a coffee."

2.OM1 receives request → communicates with Smart Assistant.

3.Payment initiated via crypto wallet (Sepolia testnet).

4. Transaction status (✅ success / ⏳ pending / ❌ failed) returned to user.

📹 Demo Requirements (For Bounty Submission)

Provide a demo video showing the workflow.

Post your implementation on Twitter/X and tag the team.

Submit your contribution via GitHub Issues/PRs with:

🏠 Assistant Integrated: (e.g., Alexa, Siri, Home Assistant)

🚀 Post Link: [Link to your post]

🎥 Demo Video: [YouTube/Drive link]

🤝 Contribution

Keep your implementation modular and well-documented.

Open a PR for submission.

Join the community on Discord/Telegram for discussions and support.

📜 License

This project is licensed under the MIT License.