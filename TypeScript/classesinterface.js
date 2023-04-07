var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw2DImage = function () {
        console.log("drawing a 2d");
    };
    Circle.prototype.drawPoint = function () {
        console.log("drawing line");
    };
    return Circle;
}());
var cir = new Circle();
cir.drawPoint();
cir.draw2DImage();
