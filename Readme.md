# 📦 MK App Creatives Project - File Upload Service

A simple, scalable Node.js file upload system using:

- ✅ Express.js
- ✅ Sequelize ORM
- ✅ SQLite (for local development)
- ✅ Clean architecture with service, controller, utils, worker layers
- ✅ Storage to local filesystem (`uploads/` folder)
- ✅ Worker-based processing simulation

---

## 📂 Project Structure

project-root/
│
├── src/
│ ├── app.js # Main entry point
│ ├── config/
│ │ └── db.js # Database config and Sequelize instance
│ ├── models/
│ │ └── upload.js # Upload model definition
│ ├── routes/
│ │ ├── upload.js # Upload API routes
│ │ └── files.js # File listing & download routes
│ ├── controllers/
│ │ └── uploadController.js
│ ├── workers/
│ │ └── processor.js # Worker logic for background processing
│ └── utils/
│ └── storage.js # Storage directory handling
│
├── uploads/ # Uploaded files will be stored here
├── .env # Environment variables
└── package.json # Project dependenc



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

```bash
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
