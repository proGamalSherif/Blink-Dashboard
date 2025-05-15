# 🚀 Blink Dashboard – Admin Panel for Branch Inventory & E-Commerce System

This repository contains the **Admin Dashboard** for **Blink – Branch Inventory & E-Commerce System**, a scalable platform designed to manage inventory, logistics, and e-commerce operations across multiple branches. The dashboard offers full management capabilities for **Admins** and **Suppliers**, with seamless integration with **Power BI** for real-time analytics.

> ⚠️ **Note**: This repository includes the **Admin Dashboard only**. Customer portals are not part of this repo.

---

## 📦 Installation

After cloning the repository, run the following command to install all required dependencies:

```bash
npm install
```

---

## ▶️ Running the Project

To run the project locally and open it in your default browser, use:

```bash
ng serve -o
```

---

## 🌐 Live Demo

Check out the live deployed version of the dashboard:

🔗 [https://blink-dashboard-beige.vercel.app/#/login](https://blink-dashboard-beige.vercel.app/#/login)

---

## 🧾 Project Overview

**Blink – Branch Inventory & E-Commerce System** is a robust and scalable solution designed to streamline:

- 🔄 **Real-time inventory management** across multiple branches.
- 🗺️ **Branch-based product dispatching** using GIS location tracking to fulfill orders from the nearest warehouse.
- 🔁 **Product transfer management** between warehouses.
- 🏷️ **Comprehensive discount management** for promotions and special offers.
- 🔐 **Role-based access control** with separate portals for:
  - Customers
  - Admins
  - Suppliers
- 📊 **Real-time dashboards** for suppliers using **Power BI Service** to monitor product performance.
- 💳 **Stripe integration** for secure online payments.

---

## 🛠️ Tech Stack

| Layer         | Technology |
|---------------|------------|
| **Frontend**  | Angular 19 (SPA, Admin Dashboard) |
| **Backend**   | ASP.NET Core 9 (MVC & Web API) |
| **Database**  | SQL Server + Entity Framework Core |
| **Auth**      | ASP.NET Identity (role-based), JWT for external portals |
| **Integrations** | Power BI Service, Azure Cloud, Google Maps API, Stripe |

---

## 📂 Project Structure

This repository includes:

- ✅ **Admin Dashboard UI**
- 📦 Management modules for:
  - Products
  - Categories
  - Branches
  - Warehouses
  - Transactions
  - Discounts
  - Users
- ⚙️ Dynamic UI using **Angular Standalone Components**
- ✅ Form validation and advanced filtering via **Reactive Forms**

---

Made with ❤️ as part of a Graduation Project – 2025.
