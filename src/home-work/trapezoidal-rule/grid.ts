export class Grid {
  private gridStrokeStyle: string;
  private labelFont: string;
  private labelColor: string;

  constructor() {
    this.gridStrokeStyle = 'lightgrey';
    this.labelFont = '10px Arial';
    this.labelColor = 'black';
  }

  public draw(context: CanvasRenderingContext2D, minX: number, maxX: number, minY: number, maxY: number): void {
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    const yStep = this.calculateGridStep(minY, maxY, canvasHeight);
    context.strokeStyle = this.gridStrokeStyle;
    context.beginPath();
    for (let y = minY + yStep; y < maxY; y += yStep) {
      const canvasY = canvasHeight - ((y - minY) / (maxY - minY) * canvasHeight);
      context.moveTo(0, canvasY);
      context.lineTo(canvasWidth, canvasY);
    }
    context.stroke();
    const xStep = this.calculateGridStep(minX, maxX, canvasWidth);
    context.beginPath();
    for (let x = minX + xStep; x < maxX; x += xStep) {
      const canvasX = (x - minX) / (maxX - minX) * canvasWidth;
      context.moveTo(canvasX, 0);
      context.lineTo(canvasX, canvasHeight);
    }
    context.stroke();
    context.font = this.labelFont;
    context.fillStyle = this.labelColor;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    for (let y = minY + yStep; y < maxY; y += yStep) {
      const canvasY = canvasHeight - ((y - minY) / (maxY - minY) * canvasHeight);
      context.fillText(y.toFixed(2), 30, canvasY);
    }
    for (let x = minX + xStep; x < maxX; x += xStep) {
      const canvasX = (x - minX) / (maxX - minX) * canvasWidth;
      context.fillText(x.toFixed(2), canvasX, canvasHeight - 10);
    }
  }

  private calculateGridStep(min: number, max: number, length: number): number {
    const range = max - min;
    const numberOfSteps = 10;
    const idealStep = range / numberOfSteps;
    const exponent = Math.floor(Math.log10(idealStep));
    const factor = Math.pow(10, exponent);
    const rounded = Math.ceil(idealStep / factor) * factor;
    const step = rounded.toFixed(10);
    return parseFloat(step);
  }
}
