import { Inputs } from "./web/constants/inputs";
import Canvas from "./web/elements/Canvas";
import SpaceshipElement from "./web/elements/SpaceshipElement";
import Helper from "./web/helper";
import { input } from "./web/helpers/input";

const spaceship = new SpaceshipElement("player_1");
input.listen(Inputs.RIGHT, spaceship.moveRight.bind(spaceship));
input.listen(Inputs.LEFT, spaceship.moveLeft.bind(spaceship));

const spaceshipEnemy = new SpaceshipElement("player_2", true);
spaceshipEnemy.setPosition({ x: 450, y: 0 });
input.listen(Inputs.UP, spaceshipEnemy.moveRight.bind(spaceshipEnemy));
input.listen(Inputs.DOWN, spaceshipEnemy.moveLeft.bind(spaceshipEnemy));

const canvas = new Canvas(Helper.getById("game"));
canvas.addObject(spaceship)
canvas.addObject(spaceshipEnemy)
canvas.init();