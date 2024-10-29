const User = require('../models/users.js');

const UserController = {
    signUp: async function(req, res) {
        try {
            const user = new User(req.body);
            const users = await user.save();
            return res.send(users);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    login: async function(req, res) {
        try {
            const filter = {
                $or: [{ username: req.body.username }, { email: req.body.username }],
                password: req.body.password
            };
            const data = await User.find(filter);

            if (data.length === 0) {
                return res.status(404).send({ error: "User doesn't exist" });
            }

            // Token generation logic can go here
            return res.send(data[0]);
        } catch (err) {
            return res.status(500).send({ error: "An error occurred during login" });
        }
    },

    getUser: async function(req, res) {
        try {
            const data = await User.find({});
            return res.send(data);
        } catch (err) {
            return res.status(500).send(err);
        }
    },

    deleteUser: async function(req, res) {
        try {
            await User.deleteOne({ _id: req.params.id });
            return res.send({ data: "Removed successfully" });
        } catch (err) {
            return res.status(500).send(err);
        }
    }
};

module.exports = UserController;
