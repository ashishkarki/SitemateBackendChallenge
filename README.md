# Sitemate Backend Challenge - Sep 2024

## Overview

This project is a simple REST API server with a client application designed to manage "Issues" (similar to GitHub or Jira). The server and client are developed to demonstrate CRUD operations and are bundled in a streamlined, easy-to-deploy setup.

## Features

- **REST API**: Provides endpoints for creating, reading, updating, and deleting issues.
- **Client Application**: A front-end interface (to be integrated later) for interacting with the API.
- **Environment Configuration**: Managed using `.env` files for flexibility across different environments.
- **Modular Design**: Clear separation between client and server components.

## Technologies

- **Backend**: Node.js, Express.js
- **Frontend**: React (to be integrated and served statically)
- **Environment Management**: dotenv

## Setup and Usage

### 1. Clone the Repository

```
git clone https://github.com/MistakeDefined/SitemateBackendChallenge.git

cd SitemateBackendChallenge
```

### 2. Install Dependencies

#### Server

```
cd server

npm install
```

### 3. Run the Server

`npm run dev`

The server will start on `http://localhost:3000`.

### 4. Test the API

Use tools like Postman to interact with the API. The base URL for all API requests is:

`http://localhost:3000/api/v1/`

### Example Endpoints:

- **Get API Root**: `GET /api/v1/` - Returns a welcome message.
- **Get Issues**: `GET /api/v1/issues` - Fetches a list of issues.

### 5. (Optional) Dockerization

If time permits, this project will be Dockerized to simplify deployment.

## Future Enhancements

- **Static Frontend**: Serve the client application statically from the backend.
- **Dockerization**: Containerize the entire application for easy deployment.

## Postman Collection (Planned)

If you prefer testing with Postman, a Postman collection will be included in the final project.

## License

This project is licensed under the MIT License.
