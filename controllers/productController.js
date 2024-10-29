const Product = require('../models/products.js');
const Cart = require('../models/cart.js');
const Address = require('../models/address.js');

const ProductController = {
    addProduct: async function(req, res) {
        try {
            const product = new Product(req.body);
            const data = await product.save();
            return res.send(data._id);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    getProduct: async function(req, res) {
        try {
            const filter = {};
            const obj = req.body;
            Object.keys(obj).forEach(function(key) {
                filter[key] = new RegExp('.*' + obj[key] + '.*', 'i');
            });

            const data = await Product.find(filter);
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    deleteProduct: async function(req, res) {
        try {
            await Product.deleteOne({ _id: req.params.id });
            return res.send({ data: "Removed successfully" });
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    addCart: async function(req, res) {
        try {
            if (req.body._id) {
                req.body.productid = req.body._id;
                delete req.body._id;
            }
            const cart = new Cart(req.body);
            const data = await cart.save();
            return res.send(data._id);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    getMyCart: async function(req, res) {
        try {
            const filter = {};
            const obj = req.body;
            Object.keys(obj).forEach(function(key) {
                filter[key] = obj[key];
            });

            const data = await Cart.aggregate([
                { $match: filter },
                { $group: {
                    _id: { 'productid': '$productid', 'user_id': '$user_id' },
                    quantity: { $sum: 1 },
                    price: { $sum: '$price' },
                    name: { $last: '$name' },
                    description: { $last: '$description' },
                    image: { $last: '$image' },
                    productid: { $last: '$productid' },
                    id: { $last: '$_id' }
                } }
            ]);
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    getMyCartCount: async function(req, res) {
        try {
            const filter = {};
            const obj = req.query;
            Object.keys(obj).forEach(function(key) {
                filter[key] = obj[key];
            });

            const data = await Cart.aggregate([
                { $match: filter },
                { $group: {
                    _id: { 'user_id': '$user_id' },
                    quantity: { $sum: 1 }
                } }
            ]);
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    removeMyCart: async function(req, res) {
        try {
            const data = await Cart.deleteOne({ _id: req.params.id });
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    addAddress: async function(req, res) {
        try {
            const data = await Address.findOneAndUpdate(
                { user_id: req.body.user_id },
                { $set: req.body },
                { upsert: true, new: true }
            );
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    getAddress: async function(req, res) {
        try {
            const filter = {};
            const obj = req.body;
            Object.keys(obj).forEach(function(key) {
                filter[key] = new RegExp('.*' + obj[key] + '.*', 'i');
            });

            const data = await Address.find(filter);
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    },
};

module.exports = ProductController;
