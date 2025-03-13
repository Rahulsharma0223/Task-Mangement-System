# Task Manager

This is a Task Manager application built with Next.js, NestJS, and MongoDB.

## Prerequisites
Before running the project, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)

## Clone the Repository
```sh
git clone https://github.com/Rahulsharma0223/Task-Mangement-System.git
cd task-management-system
```

## Setting Up MongoDB
### Option 1: Running MongoDB Locally
1. Download and install MongoDB Community Server from [here](https://www.mongodb.com/try/download/community).
2. Start MongoDB:
   ```sh
   mongod --dbpath=<your-db-path>
   ```
   Replace `<your-db-path>` with a valid directory for storing MongoDB data.
3. MongoDB will be available at `mongodb://localhost:27017/`.

### Option 2: Using MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new cluster.
3. Get the connection string and update the `.env` file.

## Backend Setup (NestJS API)
1. Navigate to the backend folder:
   ```sh
   cd task-manager-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure it:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/taskmanager
   JWT_SECRET=your_secret_key
   ```
4. Run the backend server:
   ```sh
   npm run start:dev
   ```

## Frontend Setup (Next.js)
1. Navigate to the frontend folder:
   ```sh
   cd ../task-manager-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the frontend server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## Running the Test Suite
### Backend Tests (NestJS)
To run tests for the backend, use:
```sh
cd task-manager-backend
npm run test
```

### Frontend Tests (Next.js)
To run frontend tests, use:
```sh
cd ../task-manager-frontend
npm run test
```

## Troubleshooting
- If you encounter dependency issues, try:
  ```sh
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```
- Ensure MongoDB is running before starting the backend.

## Contributing
Feel free to fork this repo and submit pull requests!

## License
This project is licensed under the MIT License.

