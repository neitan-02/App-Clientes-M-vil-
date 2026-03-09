const db = require("../config/database");

const User = {
    findByEmail: (email, callback) => {
        const query = "SELECT * FROM users WHERE email = ?";
        db.get(query, [email], callback);
    },

    create: (user, callback) => {
        const query = "INSERT INTO users (email, password) VALUES (?, ?)";
        db.run(query, [user.email, user.password], callback);
    }
};

module.exports = User;