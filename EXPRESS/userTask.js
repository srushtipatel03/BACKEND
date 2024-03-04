const express = require('express');
const app = express();
const port = 1212;
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

const userRoutes = require('./Routes/userTask.routes');
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log('Server running at http://localhost:1212');
});