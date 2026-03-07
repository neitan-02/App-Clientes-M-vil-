const db = require("../config/database");

const User = {
    finByEmail: (email, callback) => {
        const query = "SELECT * FROM users WHERE email = ?"; 
        db.get(query [email], callback); 
    },

    create: (user, callback) => {
        const query = "INERT INTO users (email, password) VALUES (?,?)"
        db.run(query, [user.email, user.password], callback)
    }
}; 

module.exports = User;