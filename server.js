const express = require("express");
const connectDB = require("./config/db-connector");
const app = express();

// connect to DB
connectDB();

app.use(express.json({ extended: false }));
// Define routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/post", require("./routes/api/post"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED! Connect to port ${PORT}`));
