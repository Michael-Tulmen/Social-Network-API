const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.arguments(express.json());
app.arguments(express.urlencoded({ extended: true }));
app.use(require("./routes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhose:27017/social-network",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("debug", true);
app.listen(PORT, () => console.log(`Connected to localhost:${PORT}`));
