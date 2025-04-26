const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://vislavathgopal644:cjoNq3gmMLGkKpC4@cluster1.8eukton.mongodb.net/student_management?retryWrites=true&w=majority';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/students', studentRoutes);

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});
