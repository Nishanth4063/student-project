# 🎓 Student Management System

> A full-stack web application to manage student records with real-time data handling, complete CRUD operations, and robust form validation — built using Angular, Spring Boot, and SQL Server.

---

## 🚀 Tech Stack

| Layer    | Technology                       |
| -------- | -------------------------------- |
| Frontend | Angular, TypeScript, HTML5, CSS3 |
| Backend  | Java, Spring Boot, REST APIs     |
| Database | SQL Server (SSMS), T-SQL         |
| Tools    | Git, GitHub                      |

---

## ✨ Features

* 📋 View all students in a clean and responsive UI
* ➕ Add new student records with validation
* ✏️ Update existing student details
* 🗑️ Delete student records
* 🔍 Search students by name or details
* ✅ Form validation with real-time error messages
* ⚠️ Alert notification for invalid inputs

---

## 🧠 Key Highlights

* Implemented both frontend and backend validation
* Built RESTful APIs for smooth communication
* Designed user-friendly UI with proper error handling
* Handled real-world input validation and edge cases

---

## 🏗️ Architecture

```
Frontend (Angular)
      ↓  HTTP Requests (REST API)
Backend (Spring Boot)
      ↓  SQL Queries / JPA
Database (SQL Server)
```

---

## 📸 Screenshots

### 🏠 Dashboard

![Dashboard](img/dashboard.png)

### ➕ Add Student

![Create](img/create.png)

### ✏️ Update Student

![Update](img/update.png)

### 📋 Student List

![List](img/list.png)

### ⚠️ Validation Error

![Validation Error](img/validation-error.png)

---

## ⚙️ Getting Started

### Prerequisites

* Java 17+
* Node.js & Angular CLI
* SQL Server (SSMS)

---

### 🔧 Backend Setup

```bash
# Clone the repository
git clone https://github.com/Nishanth4063/student-project

# Navigate to backend
cd student-backend

# Configure DB in application.properties
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=student_db
spring.datasource.username=your_username
spring.datasource.password=your_password

# Run the application
./mvnw spring-boot:run
```

---

### 💻 Frontend Setup

```bash
# Navigate to frontend
cd student-frontend

# Install dependencies
npm install

# Run the application
ng serve
```

Open your browser at: http://localhost:4200

---

## 📡 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/students`      | Get all students  |
| GET    | `/students/{id}` | Get student by ID |
| POST   | `/students`      | Add new student   |
| PUT    | `/students/{id}` | Update student    |
| DELETE | `/students/{id}` | Delete student    |

---

## 👨‍💻 Author

**Nishanth K**

* GitHub: https://github.com/Nishanth4063

---

> ⭐ If you found this project useful, feel free to star the repository!
