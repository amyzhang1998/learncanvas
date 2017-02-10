function Grids() {}
Grids.prototype.draw = function(context, initX, initY) {
    context.lineWidth = 0.2;
    context.beginPath();
    const interval = 10;
    x = initX % interval;
    y = initY % interval;
    for (var i = 0; i < canvas.width / interval; i++) {
        context.moveTo(x + interval * i, 0);
        context.lineTo(x + interval * i, canvas.height);
        context.moveTo(0, y + interval * i);
        context.lineTo(canvas.width, y + interval * i);
    }
    context.stroke();
}
