export class Grid {
  constructor(private size: number = 100, private strokeStyleLight: string = 'lightgrey', private strokeStyleDark: string = 'grey') {
    this.size = size;
    this.strokeStyleLight = strokeStyleLight;
    this.strokeStyleDark = strokeStyleDark;
  }
  public draw(context: CanvasRenderingContext2D) {
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    context.beginPath();
    for (let x = 0; x <= canvasWidth; x += this.size) {
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
    }
    for (let y = 0; y <= canvasHeight; y += this.size) {
      context.moveTo(0, y);
      context.lineTo(canvasWidth, y);
    }
    context.strokeStyle = this.strokeStyleLight;
    context.stroke();

    context.beginPath();
    for (let x = 0; x <= canvasWidth; x += this.size * 10) {
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
    }
    for (let y = 0; y <= canvasHeight; y += this.size * 10) {
      context.moveTo(0, y);
      context.lineTo(canvasWidth, y);
    }

    context.strokeStyle = this.strokeStyleDark;
    context.stroke();
  }
}