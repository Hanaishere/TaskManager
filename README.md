# Task Manager

##  About the Project

This is a simple full-stack Task Manager application built to demonstrate basic CRUD operations.
Users can add tasks, view them, mark them as completed and delete them.

The goal of this project was to focus on clean structure, working API integration, and core functionality rather than complex UI design.

---

## Tech Stack

* Frontend: React (Vite)
* Backend: Spring Boot
* Communication: REST APIs
* Storage: In-memory (no database)

---

## Features

* Add new tasks
* View all tasks
* Mark tasks as completed
* Delete tasks
* Basic validation (e.g., empty task title)

---

## How to Run

### 1. Clone the repository

git clone https://github.com/Hanaishere/TaskManager.git

---

### 2. Run the Backend

cd TaskManager-Backend
mvn spring-boot:run

Backend will run on: http://localhost:8080

---

### 3. Run the Frontend

cd TaskManagerFrontend
npm install
npm run dev

Frontend will run on: http://localhost:5173

---

## API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /tasks      | Fetch all tasks   |
| POST   | /tasks      | Create a new task |
| PATCH  | /tasks/{id} | Toggle completion |
| DELETE | /tasks/{id} | Delete a task     |

---

## Notes 

* Tasks are stored in memory, so data resets when the server restarts
* UI is intentionally kept simple to prioritize functionality
* No database was used to keep the solution lightweight and within the given time scope

---
