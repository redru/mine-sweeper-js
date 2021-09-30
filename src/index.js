import {initializeGame} from './GameEngine';
import Square from './models/Square';

initializeGame({
    configuration: {
        screen: { width: 300, height: 300 },
        gameplay: {
            mines: 90,
        }
    }
});

const square = Square({ x: 0, y: 0, width: 100, height: 100 });
square.draw();

const square2 = Square({ x: 0, y: 110, width: 100, height: 100 });
square2.draw();
