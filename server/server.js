const  express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require("dotenv").config();
const app=express();
//middleware
app.use(cors());
app.use(express.json());
//Routes

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/sessions", require("./routes/sessionRoutes"));
// app.use("/api/receipts", require("./routes/receiptRoutes"));
// app.use("/api/messages", require("./routes/messageRoutes"));
// app.use("/api/audits", require("./routes/auditRoutes"));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("DB connection error:", err));