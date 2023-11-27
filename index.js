const express = require ('express');
const mongoose = require('mongoose');
const teaControllers = require('./controller/teacher');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

//function to connect to MongoDB
const { connectDB } = require('./model/dbconnection');
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Routes
app.use('/teas', teaControllers);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
