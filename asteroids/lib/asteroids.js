const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
window.MovingObject = MovingObject;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
Util.inherits(Asteroid, MovingObject);
let circle = new MovingObject(
  { pos: [30, 30], vel: [100, 100], radius: 5, color: "#00FF00"}
);

circle.draw(ctx);

function Asteroid(posArgs, radius = 20, color = 'grey') {
// this.position = args.pos;
// this.vec = Util.randomVec(args.radius * 2);
// debugger;
this.COLOR = this.color;
this.RADIUS = this.radius;
MovingObject.call(ctx, posArgs.pos, Util.randomVec(this.radius * 2));
}


let asteroid = new Asteroid(
  { pos: [200, 200] }
);
asteroid.draw(ctx);
