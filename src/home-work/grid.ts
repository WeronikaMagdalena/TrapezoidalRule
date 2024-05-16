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
 */

export class Grid {
  private gridStrokeStyle: string;
  private labelFont: string;
  private labelColor: string;

  /**
   * Initializes the Grid instance with default styles.
   */
  constructor() {
    this.gridStrokeStyle = 'lightgrey';
    this.labelFont = '10px Arial';
    this.labelColor = 'black';
  }

  /**
   * Draws the grid lines and labels on the graph canvas.
   * @param context - The canvas rendering context.
   * @param minX - The minimum x-value of the graph.
   * @param maxX - The maximum x-value of the graph.
   * @param minY - The minimum y-value of the graph.
   * @param maxY - The maximum y-value of the graph.
   */
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

  /**
   * Calculates the grid step size based on the range and canvas length.
   * @param min - The minimum value of the range.
   * @param max - The maximum value of the range.
   * @param length - The length of the canvas.
   * @returns The calculated grid step size.
   */
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
