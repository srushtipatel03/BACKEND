const Order = require('../model/order.model');
const Cart = require('../model/cart.model');

exports.newOrder = async (req, res) => {
    try {
        let cartItem = await Cart.find({user: req.user._id, isDelete: false}).populate('cartItem');
        //res.send(cartItem);
        let orderItems = cartItem.map(item => ({
            product: item.cartItem._id,
            quantity: item.quantity,
            price: item.cartItem.price
        }));
        //console.log(orderItems);
        let totalPrice = orderItems.reduce((total, item) => total + (item.price * item.quantity), 100);
        //console.log(totalPrice);
        let newOrder = await Order.create({
            user: req.user._id,
            items: orderItems,
            totalAmount: totalPrice
        });
        newOrder.save();
        await Cart.updateMany({ user: req.user._id}, { $set: {isDelete: true}});
        res.status(201).json({ order: newOrder, message: 'Order place successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        let orders = await Order.find({ user: req.user._id, isDelete: false});
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

exports.getOrder = async (req, res) => {
    try {
        let orderId = req.query.orderId;
        let order = await Order.findById(orderId);
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error'});
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        let orderId = req.query.orderId;
        let order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        order = await Order.findOneAndUpdate({_id: order._id}, {isDelete: true }, { new: true });
        res.status(200).json({order, message: 'Order deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
