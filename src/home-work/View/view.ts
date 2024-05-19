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

import { GridView } from "./grid-view";
import { FunctionView } from "./function-view";
import { TrapezoidsView } from "./trapezoids-view";

export class View {
  private readonly canvas: HTMLCanvasElement = document.getElementById('graph-canvas') as HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D = this.canvas.getContext('2d')!;
  private readonly grid: GridView = new GridView();
  private readonly function: FunctionView = new FunctionView();
  private readonly trapezoids: TrapezoidsView = new TrapezoidsView();

  draw({ x, y }: { x: number[], y: number[] }, start: number, end: number, { minY, maxY }: { minY: number, maxY: number }, numberOfTrapezoids: number) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.grid.draw(this.canvas, start, end, { minY, maxY });
    this.function.draw(this.canvas, { x, y }, start, end, { minY, maxY });
    this.trapezoids.draw(this.canvas, 4, { x, y }, start, end, { minY, maxY });
  }

}