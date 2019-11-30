const emitData = () => {
    io.emit('data', getData());
};
module.exports = (app, io) => {
    io.on("connection", (socket) => {
        // socketConnection = socket;
        // stream();
        // socket.on("connection", () => console.log("Client connected"));
        // socket.on("disconnect", () => console.log("Client disconnected"));
        console.log('Sketch Data' + socket.id)
        socket.on('mouse', mouseMessage);
        function mouseMessage(data) {
            socket.broadcast.emit('mouse', data)
            console.log(data)
        }
        socket.on('Sketch Data', data => {
            console.log('Sketch Data', data)
            emitData()
        })
    });
}

