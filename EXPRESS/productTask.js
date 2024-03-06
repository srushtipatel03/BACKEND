const express = require('express');
const app = express();
const port = 2323;
const morgan = require('morgan');
const mongoose = require('mongoose');

// Database connection

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sNode');
}
main()
  .then(()=>console.log('DB is Connected....'))
  .catch(err=>console.log(err));

app.use(express.json());
app.use(morgan('dev'));

const productRoutes = require('./Routes/productTask.routes');
app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log('Server running at http://localhost:2323');
});
