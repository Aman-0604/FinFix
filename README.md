# 📈 FinFix: AI-Powered Portfolio Risk Alert System

Welcome to **FinFix**, an AI ticket triage assistant. It is designed to analyse tickets created by the user and assign it to the experts based on priority and required skills. It also provides helpful notes to the experts for their ease.

---

## 🚀 Features

- **AI-Powered Query Processing**
  - Categorizes financial issues (e.g., "Volatile Midcap", "Underperforming Debt Fund")
  - Assigns severity based on user’s concern
  - Auto-suggests solutions using Gemini AI

- **Smart Advisor Assignment**
  - Matches queries to advisors based on financial domain expertise
  - Uses skill-based routing (e.g., "Tax Saving", "Debt Rebalancing")
  - Falls back to admin if no expert matches

- **User Roles & Access**
  - Investor (User)
  - Advisor (Moderator)
  - Admin

- **Event-Driven Architecture**
  - Async query processing via Inngest
  - Email notifications to assigned advisors via Mailtrap

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express  
- **Database**: MongoDB  
- **Authentication**: JWT  
- **AI**: Google Gemini API  
- **Async Jobs (Background Jobs)**: Inngest  
- **Emails**: Mailtrap  

---

## ⚙️ Installation

1. **Clone the repo**  
   ```bash
   git clone <repo-url>

2. **Create .env files in ai-ticket-assistant as well as ai-ticket-frontend**

3. **Install required packages**
   ```bash
   Terminal-1: cd ai-ticket-assistant > npm i
   Terminal-2: cd ai-ticket-assistant > npm i

4. **Run application on local server**
   ```bash
   Terminal-1: cd ai-ticket-assistant > npm run dev
   Terminal-2: cd ai-ticket-assistant > npm run inngest-dev
   Terminal-3: cd ai-ticket-frontend > npm run dev