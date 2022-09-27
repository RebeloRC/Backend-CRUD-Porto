import "reflect-metadata";
import express from 'express'

import { routes } from "./routes";

const app = express();

app.use(express.json())

app.use(routes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
})