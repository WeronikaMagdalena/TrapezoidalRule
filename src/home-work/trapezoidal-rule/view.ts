/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @description MVC Trapezoidal Rule Calculator
 * View:
 *  The application's user interface
 *  It is responsible for displaying data to the user and capturing user interactions
 *  No logic
 *  Data presentation and user interaction
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

import * as math from "mathjs";
import { Form } from "./form";
import { Grid } from "./grid";

export class View {
  private readonly canvas: HTMLCanvasElement = document.getElementById('graphCanvas') as HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D = this.canvas.getContext('2d')!;
  private readonly grid: Grid = new Grid();
  private readonly form: Form = new Form();

  constructor() {
    this.form.setupEventListeners();
  }

  public draw(expression: string, numberOfTrapezoids: number, start: number, end: number): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let minY = Infinity;
    let maxY = -Infinity;
    const step = (end - start) / (this.canvas.width * 10);
    for (let x = start; x <= end; x += step) {
      const y = math.evaluate(expression, { x: x });
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    this.grid.draw(this.context, start, end, minY, maxY);
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

  public updateCalculationResultTable(areas: number[], totalArea: number): void {
    const resultTableBody = document.getElementById('calculationTableBody');
    const totalAreaSpan = document.getElementById('totalArea');
    if (!resultTableBody || !totalAreaSpan) return;

    resultTableBody.innerHTML = '';

    areas.forEach((area, index) => {
      const row = document.createElement('tr');
      const cell1 = document.createElement('td');
      const cell2 = document.createElement('td');
      cell1.textContent = `Trapezoid ${index + 1}`;
      cell2.textContent = area.toFixed(3);
      row.appendChild(cell1);
      row.appendChild(cell2);
      resultTableBody.appendChild(row);
    });

    totalAreaSpan.textContent = totalArea.toFixed(3);
  }


}