require("dotenv").config(); // Để sử dụng biến môi trường trong file .env
const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models"); // Kết nối Sequelize (đảm bảo file models/index.js tồn tại)

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Xử lý dữ liệu JSON từ client

// Kiểm tra API mẫu
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Đồng bộ cơ sở dữ liệu (không bắt buộc, dùng cho phát triển)
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Khởi động server
const PORT = process.env.PORT || 5000; // Lấy PORT từ .env hoặc dùng 5000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
