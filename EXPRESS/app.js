const express = require('express');
const app = express();               //server create
const port = 3000;
const morgan = require('morgan');


//Middleware
app.use(express.json());
app.use(morgan('dev'));

const productRoutes = require('./Routes/product.routes');
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log('Server running at http://localhost:3000');
});
