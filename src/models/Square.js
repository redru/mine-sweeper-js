import { ctx } from '../GameEngine';

const Square = ({ x, y, width, height }) => {

    const draw = () => {
        ctx.fillRect(x, y, width, height);
    }

    return {
        draw,
    }

}

export default Square;
