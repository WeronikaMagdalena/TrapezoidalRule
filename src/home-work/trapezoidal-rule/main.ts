/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @description MVC Trapezoidal Rule Calculator
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 * tsc --outFile main.js main.ts
 */

/**
 * Main function that creates the model, view and controller
 */

import * as math from 'mathjs';

class Model {
  constructor(
    public expression: string = '1',
    public numberOfTrapezoids: number = 4,
    public start: number = 0,
    public end: number = 2
  ) { }

  public getExpression(): string {
    return this.expression;
  }

  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
  }

  public getStart(): number {
    return this.start;
  }

  public getEnd(): number {
    return this.end;
  }

  public setExpression(value: string): void {
    this.expression = value;
  }

  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
  }

  public setStart(value: number): void {
    this.start = value;
  }

  public setEnd(value: number): void {
    this.end = value;
  }
}


class View {
  private readonly canvas: HTMLCanvasElement = document.getElementById('graphCanvas') as HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D = this.canvas.getContext('2d')!;
  private readonly inputs: Array<{ elementId: string, modelSetter: string }>;

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

    // Determine the minimum and maximum y-values of the function within the specified range
    let minY = Infinity;
    let maxY = -Infinity;
    const step = (end - start) / (this.canvas.width * 50); // Calculate step size based on canvas width
    for (let x = start; x <= end; x += step) {
      const y = math.evaluate(expression, { x: x }); // Evaluate expression for current x value
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }

    // Adjust the canvas height and y-coordinate calculation to fit the function
    const range = Math.max(maxY - minY, 0.0001); // Ensuring range is not 0 to avoid division by zero
    const yOffset = Math.abs(minY);
    const scaleY = this.canvas.height / range;
    this.context.fillStyle = 'blue';

    for (let x = start; x <= end; x += step) {
      const y = math.evaluate(expression, { x: x }); // Evaluate expression for current x value
      const canvasX = (x - start) * (this.canvas.width / (end - start)); // Scale x value to fit canvas width
      const canvasY = this.canvas.height - ((y + yOffset) * scaleY); // Scale y value to fit canvas height
      this.context.fillRect(canvasX, canvasY, 1, 1); // Plot point on canvas
    }
  }

}

class Controller {

  constructor(private model: Model, private view: View) {
    this.model = model;
    this.view = view;
    this.init();
  }

  private init(): void {
    this.updateView(this.model.getExpression(), this.model.getNumberOfTrapezoids(), this.model.getStart(), this.model.getEnd());
    this.handleEvents();
  }

  private handleEvents(): void {
    document.addEventListener('input-changed', (event: Event) => {
      const customEvent = event as CustomEvent;
      const action = customEvent.detail.action;
      const value = customEvent.detail.value;
      console.log('Action:', action);
      console.log('Value:', value);
      this.updateModel(action, value);
      this.updateView(this.model.getExpression(), this.model.getNumberOfTrapezoids(), this.model.getStart(), this.model.getEnd())
    });
  }

  private updateModel(action: string, value: string): void {
    switch (action) {
      case 'setExpression':
        this.model.setExpression(value);
        break;
      case 'setNumberOfTrapezoids':
        this.model.setNumberOfTrapezoids(parseFloat(value));
        break;
      case 'setStart':
        this.model.setStart(parseFloat(value));
        break;
      case 'setEnd':
        this.model.setEnd(parseFloat(value));
        break;
    }
  }

  private updateView = (expression: string, numberOfTrapezoids: number, start: number, end: number): void => {
    this.view.draw(expression, numberOfTrapezoids, start, end);
  }
}

function main(): void {
  const model = new Model();
  const view = new View();
  new Controller(model, view);
}

main();