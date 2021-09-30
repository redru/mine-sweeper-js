import { ctx } from '../GameEngine';

const Square = ({ width, height }) => {

    const draw = () => {
        ctx.fillRect(25, 25, width, height);
    }

    return {
        draw,
    }

}

export default Square;
