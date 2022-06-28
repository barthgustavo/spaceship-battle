import { Inputs } from "./web/constants/inputs";
import Canvas from "./web/elements/Canvas";
import Spaceship from "./web/elements/Spaceship";
import Helper from "./web/helper";
import { input } from "./web/helpers/input";

const spaceship = new Spaceship(false);

input.listen(Inputs.RIGHT, spaceship.moveRight.bind(spaceship));
input.listen(Inputs.LEFT, spaceship.moveLeft.bind(spaceship));

const canvas = new Canvas(Helper.getById("game"));
canvas.addObject(spaceship)
canvas.init();