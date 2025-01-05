const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const colors = require("colors");

//dont env config
dotenv.config();

//DB connection
connectDb();

//we will use cors as a middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//all routes
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/catgeoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));
app.use("/api/v1/bookings", require("./routes/bookingRoutes"));

//main route URL http://localhost:8080
app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});
const PORT = process.env.PORT || 1010;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}..!`.white.bgMagenta);
});
