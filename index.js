const NODE_ENV = process.env.NODE_ENV || "dev";
require("dotenv").config({ path: `./.env.${NODE_ENV}` });

const express = require("express");
const app = express();
const api = require("./routes");
const cors = require("cors");

// CORS
app.use(cors());
app.use(express.json());
app.use(api);

app.listen(process.env.PORT, () => {
  console.log(
    `server run on port ${process.env.PORT}, mode: ${process.env.NODE_ENV}`
  );
});
