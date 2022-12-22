import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router";
import dotenv from "dotenv";
import { connectDB } from "./connections/database";

dotenv.config();

const app = express();
const port = process.env.PORT as unknown as number;
const url = process.env.MONGO as string 

app.use(cors(), json(), helmet());
app.use("/api", router);
app.listen(port, () => {
  connectDB(url)
  .then(()=>console.log(`App listening at http://localhost:${port}`))
  .catch(err=>console.log(err)) 
});

export default app;
