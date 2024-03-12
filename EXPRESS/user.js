require('dotenv').config();
const express = require('express');
const app = express();
const port = 4321;
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database connection
async function main() {
    await mongoose.connect(process.env.Mongo_DB_URL);
    // await mongoose.connect('mongodb://127.0.0.1:27017/sNode');
}
main()
.then(()=>console.log('DB is Connected....'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const userRoutes = require('./Routes/user.routes');
const productRoutes = require('./Routes/product.routes');
const cartRoutes = require('./Routes/cart.routes');
app.use('/api/users', userRoutes)
app.use('/api/produccts', productRoutes)
app.use('/api/carts', cartRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:4321`);
});