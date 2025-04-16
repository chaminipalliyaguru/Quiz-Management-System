# Quiz Management System

A full-stack web application designed to create, manage, and participate in quizzes.  
This system is ideal for educational institutions, trainers, and individuals looking to assess knowledge through quizzes in an interactive and responsive way.

## Features

- **User Authentication**: Secure login and registration for admins and users.
- **Quiz Creation**: Admins can create quizzes with multiple questions and options.
- **Quiz Participation**: Users can take quizzes and receive immediate feedback.
- **Result Analysis**: Detailed result tracking for each quiz attempt.
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS.

## Technologies Used

### Frontend
- **React.js** – JavaScript library for building interactive UIs
- **Tailwind CSS** – Utility-first CSS framework for rapid styling

### Backend
- **Node.js** – JavaScript runtime for server-side logic
- **Express.js** – Web framework for Node.js

### Database
- **MySQL** – Relational database for structured data storage
- **Sequelize ORM** – Object Relational Mapper for MySQL

## Installation

### Prerequisites
- Node.js and npm installed
- MySQL installed and running

### Clone the Repository

```bash
git clone https://github.com/chaminipalliyaguru/Quiz-Management-System.git
cd Quiz-Management-System
```

## Setup Backend
```bash
cd backend
npm install
```

## Run database migrations or sync Sequelize models:
```bash
node Server.js
```

## Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### Usage

- Navigate to http://localhost:3000 in your browser.
- Register or log in as a user or admin.
- Admins can create and manage quizzes.
- Users can take quizzes and see their results.

### Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request for feature additions or bug fixes.

