import "reflect-metadata";
import express from 'express'
import cors from 'cors'

import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(routes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})