const net = require("net");

// Establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
        host: "192.168.1.22",
        port: 50541
    });

    // Interpret incoming data as text
    conn.setEncoding("utf8");

    // Event handlers
    conn.on("connect", () => {
        console.log("Connected to the server");
        // Here you can send any initial data if needed
        conn.write("Name: Anim");
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