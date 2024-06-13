const express = require("express");
const config = require("./config");
const surveyRoutes = require("./routes/surveyRoutes");

const app = express();

app.use(express.json());
app.use("/surveys", surveyRoutes);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
