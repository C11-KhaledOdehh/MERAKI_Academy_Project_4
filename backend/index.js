const express = require("express");
const cors = require("cors");
require('dotenv').config();

require("./models/db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const seekerRouter = require("./routes/seeker");
const roleRouter=require("./routes/role");
const jobRouter=require("./routes/job");
const employerRouter = require("./routes/employer");
const presentersRouter = require("./routes/presenters");

app.use("/seeker", seekerRouter);
app.use("/role", roleRouter);
app.use("/job", jobRouter);
app.use("/employer", employerRouter);
app.use("/presenters", presentersRouter);


app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})