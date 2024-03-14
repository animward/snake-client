let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
    connection = conn;
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
        case 't':
            connection.write("Say: Test.");
            break;
        case 'h':
            connection.write("Say: Hello!");
            break;
        case 'b':
            connection.write("Say: Bye!");
            break;
        case 'z':
            connection.write("Say: I'm a snake!");
            break;
        case '\u0003':
            process.exit();
    }
};

module.exports = { setupInput };