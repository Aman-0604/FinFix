# 📈 FinFix: AI-Powered Portfolio Risk Alert System

Welcome to **FinFix**, an AI-enhanced financial query resolution and risk alert system for retail investors. Built on top of the original AI Ticket Assistant by ChaiCode, this project leverages AI to help users get smart suggestions and advisor support for managing mutual funds, SIPs, tax-saving options, drawdown alerts, and portfolio optimization.

---

## 🧠 What’s New in FinFix?

FinFix transforms the traditional support ticket system into a **portfolio assistant** that:

- Accepts portfolio-related queries or alerts from investors
- Uses **Google Gemini AI** to:
  - Categorize the financial issue (e.g., tax, drawdown, SIP, diversification)
  - Assign priority (e.g., high drawdown = urgent)
  - Match with a relevant **financial advisor**
  - Generate **AI-suggested financial advice**
- Sends smart alerts and expert suggestions via email

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
  - Email notifications to assigned advisors

---

## 🛠️ Tech Stack

- **Backend**: Node.js + Express  
- **Database**: MongoDB  
- **Authentication**: JWT  
- **AI**: Google Gemini API  
- **Async Jobs**: Inngest  
- **Emails**: Nodemailer + Mailtrap  
- **Deployment**: Localhost (dev-ready)

---

## 📋 Prerequisites

- Node.js (v14+)
- MongoDB
- Google Gemini API key
- Mailtrap credentials

---

## ⚙️ Installation

1. **Clone the repo**  
   ```bash
   git clone <repo-url>
   cd finfix