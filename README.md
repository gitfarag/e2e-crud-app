# Docker Container

## technologies

- Runtime: Node.js
- server app: Express
- Language: TypeScript for backend and jsx for frontend
- Container: Docker

## Installation Instructions

To run the app execute `docker compose up --build`.

it should be accessible from url “http://localhost:8080”

### Ports

The application front end on port `8080`

The application backend end on port `3001`

### Environment variables

practise of using env

```
PORT=3001
MONGO=mongodb+srv://ahmed:secret2023@cluster0.f4guphj.mongodb.net/?retryWrites=true&w=majority
```

### note

```
I used mongodb on a portal clustes intead of postgres because i faced a problem
- problem : postgres on my local machine refused to connect with backend from a       container
```
