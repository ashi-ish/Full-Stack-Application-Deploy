
# Full Stack Application Deployment

This project is a full-stack web application with a React client (using Vite) and an Express server. Both are containerized and orchestrated using Docker Compose.

## Project Structure

```
Full Stack Deployment/
│
├── client/         # React + Vite frontend
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
│
├── server/         # Express backend
│   ├── index.js
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

## Running the Application

1. **Build and start containers:**

	```sh
	docker compose up --build
	```

2. **Access the client:**

	- Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **API endpoint:**

	- The server runs on [http://localhost:8080](http://localhost:8080)
	- Example endpoint: `/api/message`

## Development

- **Client:**  
  Go to the `client` folder and use Vite commands:
  ```sh
  npm run dev      # Start development server
  npm run build    # Build for production
  ```

- **Server:**  
  Go to the `server` folder and use Node commands:
  ```sh
  npm start        # Start Express server
  ```

## Docker Compose Overview

- The client is served on port 3000 using the `serve` package.
- The server is available on port 8080.
- Both containers are connected via the `fullstack-network` bridge.

## Customization

- Update CORS origins in `server/index.js` for production.
- Add environment variables as needed.
