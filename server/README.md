# backend

## technologies

- Runtime: Node.js
- server app: Express
- Language: TypeScript
- Database: mongodb

## Installation Instructions

### Dev mode

To install the app's dependencies and use the app in dev mode, run the following:

To run the app in dev mode execute `npm i && npm run dev`.

### Ports

The application runs on port `3001`

### Environment variables

practise of using env

```
PORT=3001
MONGO=mongodb+srv://ahmed:secret2023@cluster0.f4guphj.mongodb.net/?retryWrites=true&w=majority
```

### note

```
- i used mongodb on a portal clustes intead of postgres because i faced a problem
- problem : postgres on my localmachine refused to connect with backend from a container
```
