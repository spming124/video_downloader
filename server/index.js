const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (nếu cần)
app.use(express.json());

// Route cơ bản
app.get("/", (req, res) => {
  res.send("Chào mừng đến với server NodeJS/Express!");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
