/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @description MVC Trapezoidal Rule Calculator
 * Model:
 *  Manages the application's data and provides methods to access it
 *  Encapsulates application state
 *  Doesn't know anything about the view
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

import * as math from "mathjs";

export class Model {
  /**
   * Initializes the Model instance with default values.
   * @param expression - The mathematical expression.
   * @param numberOfTrapezoids - The number of trapezoids for integration.
   * @param start - The start value of the interval.
   * @param end - The end value of the interval.
   */
  constructor(
    public expression: string = 'x^2',
    public numberOfTrapezoids: number = 4,
    public start: number = 0,
    public end: number = 2
  ) { }

  /**
   * Gets the current mathematical expression.
   * @returns The mathematical expression.
   */
  public getExpression(): string {
    return this.expression;
  }

  /**
   * Gets the current number of trapezoids for integration.
   * @returns The number of trapezoids.
   */
  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
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
   * Sets the number of trapezoids for integration.
   * @param value - The new number of trapezoids.
   */
  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
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
   * Calculates the areas of individual trapezoids for the current integration settings.
   * @returns An array containing the areas of individual trapezoids.
   */
  calculateAreas(): number[] {
    const areas: number[] = [];
    for (let i = 1; i <= this.getNumberOfTrapezoids(); i++) {
      const xi0 = this.getStart() + (i - 1) * (this.getEnd() - this.getStart()) / this.getNumberOfTrapezoids();
      const xi1 = this.getStart() + i * (this.getEnd() - this.getStart()) / this.getNumberOfTrapezoids();
      const yi0 = math.evaluate(this.getExpression(), { x: xi0 });
      const yi1 = math.evaluate(this.getExpression(), { x: xi1 });
      const area = (yi0 + yi1) * (xi1 - xi0) / 2;
      areas.push(area);
    }
    return areas;
  }
}
