export let canvas = null;
export let ctx = null;
export let configuration = null;

export const initializeGame = (params) => {
    configuration = params.configuration;
    createCanvasAndContext();
}

const createCanvasAndContext = () => {
    canvas = document.createElement('canvas');
    canvas.id = 'mine-sweeper-canvas';
    canvas.width = configuration.screen.width;
    canvas.height = configuration.screen.height;
    document.body.append(canvas);
    ctx = canvas.getContext('2d');
}
