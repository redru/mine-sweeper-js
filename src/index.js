import { initializeGame } from './GameEngine';
import Square from './models/Square';

initializeGame({
    configuration: {
        screen: { width: 300, height: 300 },
        gameplay: {
            mines: 90,
        }
    }
});

const square = Square({ width: 100, height: 100 });
square.draw();
