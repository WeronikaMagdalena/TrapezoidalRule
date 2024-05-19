/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @module FunctionView
 * @description View class for drawing the mathematical function on a canvas
 * in the MVC Trapezoidal Rule Calculator.
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

/**
 * FunctionView class that manages the drawing of the mathematical function
 * on the HTML canvas element.
 */
export class FunctionView {

  /**
   * Draws the function plot on the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   * @param {Object} points - The x and y values of the function plot.
   * @param {number[]} points.x - The x values of the function plot.
   * @param {number[]} points.y - The y values of the function plot.
   * @param {number} minX - The minimum x value of the plot.
   * @param {number} maxX - The maximum x value of the plot.
   * @param {Object} minMaxY - The minimum and maximum y values of the plot.
   * @param {number} minMaxY.minY - The minimum y value.
   * @param {number} minMaxY.maxY - The maximum y value.
   */
  draw(
    canvas: HTMLCanvasElement,
    { x, y }: { x: number[], y: number[] },
    minX: number,
    maxX: number,
    { minY, maxY }: { minY: number, maxY: number }
  ): void {
    const context: CanvasRenderingContext2D = canvas.getContext('2d')!;
    const margin = 20;
    const width = canvas.width - 2 * margin;
    const height = canvas.height - 2 * margin;
    const scaleX = width / (maxX - minX);
    const scaleY = height / (maxY - minY);

    context.beginPath();
    context.moveTo((x[0] - minX) * scaleX + margin, height - (y[0] - minY) * scaleY + margin);
    for (let i = 0; i < x.length; i++) {
      context.lineTo((x[i] - minX) * scaleX + margin, height - (y[i] - minY) * scaleY + margin);
    }
    context.lineWidth = 2;
    context.strokeStyle = 'blue';
    context.stroke();
  }
}
