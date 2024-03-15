require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database connection
async function main() {
    await mongoose.connect(process.env.Mongo_DB_URL);
    // await mongoose.connect('mongodb://127.0.0.1:27017/sNode');
    await mongoose.connect('mongodb+srv://srushtipatel2643:Srushti%40123@cluster0.zbzzsvv.mongodb.net/developement');
}
main()
.then(()=>console.log('DB is Connected....'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const userRoutes = require('./Routes/user.routes');
const { config } = require('dotenv');
app.use('/api/users', userRoutes);

const productRoutes = require('./Routes/product.routes');
app.use('/api/products', productRoutes);

const cartRoutes = require('./Routes/cart.routes');
app.use('/api/carts', cartRoutes);

const orderRoutes = require('./Routes/order.routes');
app.use('/api/orders', orderRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:4321`);
});