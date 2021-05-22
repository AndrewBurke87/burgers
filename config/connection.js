// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost' || 'bmlx3df4ma7r1yh4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'pfd7gddsa834eh1q',
    user: 'root',
    // NOTE: Be sure to add your MySQL password here!
    password: 'bnw44h9nt8utavh9!' || 'Cubbies87!',
    database: 'h2qnv47t7x7jptdm' || 'burger_db',
    dialect: "mysql",
});

// Make connection.
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Export connection for our ORM to use.
module.exports = connection