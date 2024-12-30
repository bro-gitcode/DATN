require("dotenv").config(); // Đọc file .env
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models"); // Import Sequelize

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Xử lý JSON từ client

// Test API
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Kết nối cơ sở dữ liệu
sequelize
  .authenticate()
  .then(() => console.log("Connected to the database!"))
  .catch((err) => console.error("Unable to connect to the database:", err));

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
