const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();


const app = express();
app.use(express.json());

// Routes
app.use('/api/users', require('./src/routes/user.routes'));
app.use('/api/records', require('./src/routes/record.routes'));
app.use('/api/summary', require('./src/routes/summary.routes'));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));