# 📦 MK App Creatives Project - File Upload Service

A simple, scalable Node.js file upload system using:

- ✅ Express.js
- ✅ Sequelize ORM
- ✅ SQLite (for local development)
- ✅ Clean architecture with service, controller, utils, worker layers
- ✅ Storage to local filesystem (`uploads/` folder)
- ✅ Worker-based processing simulation

---

## 📂 Project File Structure

<img width="591" alt="Screenshot 2025-06-14 at 4 16 18 PM" src="https://github.com/user-attachments/assets/1732a01b-887d-4236-889b-add5b51699d9" />



---

## 🚀 Features

- Upload files via REST API (POST request with form-data)
- Store metadata with uploaded files
- Process uploads asynchronously in worker simulation
- Query file status
- Download completed files
- Fully modular service-repository-controller architecture

---

## ⚙️ Prerequisites

- Node.js >= 18.x (recommended latest LTS)
- NPM >= 9.x

---

## 🛠️ Setup Instructions

1️⃣ **Clone the repository**

git clone <your-repo-url>
cd Mk-App-Creatives-Project




`API Request`

Upload File
  - POST /upload
    | Field    | Type   | Required | Description                    |
    | -------- | ------ | -------- | ------------------------------ |
    | file     | File   | ✅        | File you want to upload        |
    | metadata | String | ✅        | Metadata in JSON string format |
    
    metadata exmaple :- {"author": "Ashutosh", "type": "pdf"}

Get Upload Status
    GET /files/:id
 
List All Files
    GET /files

Download Completed File
    GET /files/:id/download


Some postman screenShots
<img width="999" alt="Screenshot 2025-06-14 at 4 11 23 PM" src="https://github.com/user-attachments/assets/21c0544b-9803-460a-ab87-b60f8489fc9f" />

<img width="928" alt="Screenshot 2025-06-14 at 4 12 08 PM" src="https://github.com/user-attachments/assets/73e52411-c0e5-4225-bd0e-a57473c5b93f" />

<img width="897" alt="Screenshot 2025-06-14 at 4 12 35 PM" src="https://github.com/user-attachments/assets/c32e37ba-240d-40b3-85c9-6c40ec5d4bcd" />

<img width="900" alt="Screenshot 2025-06-14 at 4 14 03 PM" src="https://github.com/user-attachments/assets/f58f1111-516a-4717-92f8-f20c3c52330c" />


