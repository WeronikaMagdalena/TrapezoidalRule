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

import * as math from "mathjs";

export class FunctionModel {
  private expression: string;
  private start: number;
  private end: number;

  constructor(
    expression: string = 'x^2 + 1',
    start: number = 0,
    end: number = 2
  ) {
    this.expression = expression;
    this.start = start;
    this.end = end;
  }

  /**
  * Gets the current mathematical expression.
  * @returns The mathematical expression.
  */
  public getExpression(): string {
    return this.expression;
  }

  /**
   * Gets the start value of the integration interval.
   * @returns The start value of the interval.
   */
  public getStart(): number {
    return this.start;
  }

  /**
   * Gets the end value of the integration interval.
   * @returns The end value of the interval.
   */
  public getEnd(): number {
    return this.end;
  }

  /**
   * Sets the mathematical expression.
   * @param value - The new mathematical expression.
   */
  public setExpression(value: string): void {
    this.expression = value;
  }

  /**
   * Sets the start value of the integration interval.
   * @param value - The new start value of the interval.
   */
  public setStart(value: number): void {
    this.start = value;
  }

  /**
   * Sets the end value of the integration interval.
   * @param value - The new end value of the interval.
   */
  public setEnd(value: number): void {
    this.end = value;
  }

  plotFunction() {
    const xValues: number[] = [];
    const yValues: number[] = [];
    for (let x = this.start; x <= this.end + 0.01; x += 0.05) {
      xValues.push(x);
      const y = math.evaluate(this.expression, { x });
      yValues.push(y);
    }
    const { x, y } = { x: xValues, y: yValues };
    return { x, y };
  }

  calculateMinMax() {
    const { x, y } = this.plotFunction();
    return { minY: Math.min(...y), maxY: Math.max(...y) };
  }

}