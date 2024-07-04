# Node.js Express Application with Request Logging Middleware

This project demonstrates how to implement request logging middleware in a Node.js Express application using basic `console.log` for logging purposes.

## Features

- Automatically logs incoming requests with details such as method, URL, IP address, and timestamp.
- Uses Express.js for routing and middleware management.
- Example routes (`GET` and `POST`) to showcase middleware functionality.

## Setup Instructions

### Prerequisites

- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the Express server:

```bash
npm start
```

The server will start at `http://localhost:3000`.

### Usage

1. Access the homepage:

   Open your web browser and go to [http://localhost:3000](http://localhost:3000). You should see "Hello World!".

2. Explore request logging:

   - Check the console output where the server is running (`npm start` terminal).
   - Each incoming request (`GET`, `POST`, etc.) will be logged with details like method, URL, IP address, and timestamp.

### Folder Structure

```
my-express-app/
│
├── app.js           # Main application file
├── node_modules/    # Node modules (auto-generated)
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

### Contributing

Contributions are welcome! Feel free to submit issues or pull requests.


