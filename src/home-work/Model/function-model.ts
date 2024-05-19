/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @module FunctionModel
 * @description Model class for representing and manipulating a mathematical function
 * for the MVC Trapezoidal Rule Calculator.
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

import * as math from "mathjs";

/**
 * FunctionModel class that manages the mathematical function to be used
 * in trapezoidal rule calculations.
 */
export class FunctionModel {
  private expression: string;
  private start: number;
  private end: number;

  /**
   * Constructs a new FunctionModel instance.
   * @param expression - The mathematical expression as a string (default is 'x^2 + 1').
   * @param start - The start value of the integration interval (default is 0).
   * @param end - The end value of the integration interval (default is 2).
   */
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
   * @returns {string} The mathematical expression.
   */
  public getExpression(): string {
    return this.expression;
  }

  /**
   * Gets the start value of the integration interval.
   * @returns {number} The start value of the interval.
   */
  public getStart(): number {
    return this.start;
  }

  /**
   * Gets the end value of the integration interval.
   * @returns {number} The end value of the interval.
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

  /**
   * Plots the function over the interval and returns the x and y values.
   * @returns {Object} An object containing arrays of x and y values.
   */
  public plotFunction(): { x: number[], y: number[] } {
    const xValues: number[] = [];
    const yValues: number[] = [];
    for (let x = this.start; x <= this.end + 0.01; x += 0.01) {
      xValues.push(x);
      const y = math.evaluate(this.expression, { x });
      yValues.push(y);
    }
    return { x: xValues, y: yValues };
  }

  /**
   * Calculates the minimum and maximum y values of the function over the interval.
   * @returns {Object} An object containing the min and max y values.
   */
  public calculateMinMax(): { minY: number, maxY: number } {
    const { x, y } = this.plotFunction();
    return { minY: Math.min(...y), maxY: Math.max(...y) };
  }
}
