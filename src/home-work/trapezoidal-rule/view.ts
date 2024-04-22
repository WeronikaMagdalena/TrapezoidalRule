import { Grid } from "./grid";
import * as math from 'mathjs';

export class View {
  private readonly canvas: HTMLCanvasElement = document.getElementById('graphCanvas') as HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D = this.canvas.getContext('2d')!;
  private readonly inputs: Array<{ elementId: string, modelSetter: string }>;
  private readonly grid: Grid = new Grid();

  constructor() {
    this.inputs = [
      { elementId: '#expression', modelSetter: 'setExpression' },
      { elementId: '#numberOfTrapezoids', modelSetter: 'setNumberOfTrapezoids' },
      { elementId: '#start', modelSetter: 'setStart' },
      { elementId: '#end', modelSetter: 'setEnd' }
    ];
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    this.inputs.forEach(input => {
      const inputElement = document.querySelector(input.elementId) as HTMLInputElement;
      inputElement.addEventListener('input', () => {
        let inputValue: string | number = inputElement.value;
        if (input.modelSetter === 'setNumberOfTrapezoids' || input.modelSetter === 'setStart' || input.modelSetter === 'setEnd') {
          inputValue = parseFloat(inputValue);
        }
        const EVENT_INFO: object = { action: input.modelSetter, value: inputValue };
        document.dispatchEvent(new CustomEvent('input-changed', { detail: EVENT_INFO }));
      });
    });
  }

  public draw(expression: string, numberOfTrapezoids: number, start: number, end: number): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.grid.draw(this.context);
    let minY = Infinity;
    let maxY = -Infinity;
    const step = (end - start) / (this.canvas.width * 50);
    for (let x = start; x <= end; x += step) {
      const y = math.evaluate(expression, { x: x });
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    const range = Math.max(maxY - minY, 0.0001);
    const yOffset = Math.abs(minY);
    const scaleY = this.canvas.height / range;
    this.context.fillStyle = 'blue';
    for (let x = start; x <= end; x += step) {
      const y = math.evaluate(expression, { x: x });
      const canvasX = (x - start) * (this.canvas.width / (end - start));
      const canvasY = this.canvas.height - ((y + yOffset) * scaleY);
      this.context.fillRect(canvasX, canvasY, 1, 1);
    }
  }

}