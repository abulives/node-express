const Order = require('../models/orders.js');
const Cart = require('../models/cart.js');

const OrderController = {
    findCart: async (req, res, next) => {
        const filter = { user_id: req.body.user_id };
        try {
            const data = await Cart.aggregate([
                { $match: filter },
                {
                    $group: {
                        _id: { 'productid': '$productid', 'user_id': '$user_id' },
                        quantity: { $sum: 1 },
                        productid: { $last: '$productid' }
                    }
                }
            ]);

            if (data.length === 0) {
                return res.status(500).send({ errmsg: "Something went wrong" });
            }

            // Clean up the response by removing _id
            data.forEach(item => {
                delete item._id;
            });

            req.body.items = data;
            return next();
        } catch (err) {
            return res.status(500).send({ errmsg: "Something went wrong" });
        }
    },

    saveOrder: async (req, res, next) => {
        const order = new Order(req.body);
        try {
            await order.save();
            return next();
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    deleteCart: async (req, res) => {
        try {
            await Cart.remove({ user_id: req.body.user_id });
            return res.send({ msg: "Order placed successfully" });
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    myOrder: async (req, res) => {
        const filter = {};
        const obj = req.body;
        Object.keys(obj).forEach(key => {
            filter[key] = obj[key];
        });

        try {
            const orders = await Order.find(filter)
                .populate('items.productid')
                .sort({ created_on: -1 });
            return res.send(orders);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    allOrder: async (req, res) => {
        try {
            const orders = await Order.find({})
                .populate('items.productid')
                .sort({ created_on: -1 });
            return res.send(orders);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    updateOrder: async (req, res) => {
        try {
            const data = await Order.update(
                { 'items._id': req.body.id },
                { $set: { 'items.status': req.body.status } }
            );
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    }
};

module.exports = OrderController;
