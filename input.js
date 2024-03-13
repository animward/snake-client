let connection;

// setup interface to handle user input from stdin
const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

// handle user input
const handleUserInput = function (key) {
    // movement
    switch (key) {
        case 'w':
            connection.write("Move: up");
            break;
        case 'a':
            connection.write("Move: left");
            break;
        case 's':
            connection.write("Move: down");
            break;
        case 'd':
            connection.write("Move: right");
            break;
    }
    if (key === '\u0003') {
        process.exit();
    }
};

module.exports = { setupInput };