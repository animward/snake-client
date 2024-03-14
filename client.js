const net = require("net");
const { IP } = require("./constants");

// Establishes a connection with the game server
const connect = function (setupInput) {
    const conn = net.createConnection({
        host: IP,
        port: PORT
    });

    // Interpret incoming data as text
    conn.setEncoding("utf8");

    // Event handlers
    conn.on("connect", () => {
        console.log("Connected to the server");
        // Here you can send any initial data if needed
        conn.write("Name: Anim");
        // Move commands
        setupInput(conn);
    });

    conn.on("data", (data) => {
        console.log("Server says:", data);
        // Handle incoming data from the server as needed
    });

    conn.on("error", (err) => {
        console.error("Connection error:", err);
        // Handle connection errors
    });

    return conn;
};

module.exports = connect;