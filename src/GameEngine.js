export let canvas = null;
export let ctx = null;
export let configuration = null;

export const initializeGame = (params) => {
    configuration = params;
    createCanvasAndContext();
}

const createCanvasAndContext = () => {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');

    canvas.id = 'mine-sweeper-canvas';
    canvas.width = configuration.screen.width;
    canvas.height = configuration.screen.height;
    document.body.append(canvas);
}
