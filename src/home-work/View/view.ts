/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @module View
 * @description View class for the MVC Trapezoidal Rule Calculator.
 * It manages the graphical representation of the function, grid, and trapezoids on a canvas.
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

import { GridView } from "./grid-view";
import { FunctionView } from "./function-view";
import { TrapezoidsView } from "./trapezoids-view";

/**
 * View class that manages the drawing of the function, grid, and trapezoids
 * on the HTML canvas element.
 */
export class View {
  private readonly canvas: HTMLCanvasElement = document.getElementById('graph-canvas') as HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D = this.canvas.getContext('2d')!;
  private readonly grid: GridView = new GridView();
  private readonly function: FunctionView = new FunctionView();
  private readonly trapezoids: TrapezoidsView = new TrapezoidsView();

  /**
   * Draws the graph on the canvas, including the grid, function, and trapezoids.
   * @param {Object} points - The x and y values of the function plot.
   * @param {number[]} points.x - The x values of the function plot.
   * @param {number[]} points.y - The y values of the function plot.
   * @param {number} start - The start value of the integration interval.
   * @param {number} end - The end value of the integration interval.
   * @param {Object} minMax - The minimum and maximum y values of the function plot.
   * @param {number} minMax.minY - The minimum y value.
   * @param {number} minMax.maxY - The maximum y value.
   * @param {number} numberOfTrapezoids - The number of trapezoids used in the calculation.
   * @param {number} totalArea - The total area calculated using the trapezoidal rule.
   */
  draw(
    { x, y }: { x: number[], y: number[] },
    start: number,
    end: number,
    { minY, maxY }: { minY: number, maxY: number },
    numberOfTrapezoids: number,
    totalArea: number
  ): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = 'black';
    this.context.fillText('Total Area: ' + totalArea.toString(), this.canvas.width / 2 - 10, 10);
    this.grid.draw(this.canvas, start, end, { minY, maxY });
    this.function.draw(this.canvas, { x, y }, start, end, { minY, maxY });
    this.trapezoids.draw(this.canvas, numberOfTrapezoids, { x, y }, start, end, { minY, maxY });
  }
}
