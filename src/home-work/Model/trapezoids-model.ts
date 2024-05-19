/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @module TrapezoidsModel
 * @description Model class for representing and manipulating trapezoids
 * for the MVC Trapezoidal Rule Calculator.
 */

import * as math from "mathjs";

/**
 * TrapezoidsModel class that manages the number of trapezoids and the calculated area
 * for trapezoidal rule integration.
 */
export class TrapezoidsModel {
  private numberOfTrapezoids: number = 4;
  private totalArea: number = 4.75;

  /**
   * Gets the number of trapezoids.
   * @returns {number} The current number of trapezoids.
   */
  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
  }

  /**
   * Sets the number of trapezoids.
   * @param value - The new number of trapezoids.
   */
  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
  }

  /**
   * Gets the total area calculated using the trapezoidal rule.
   * @returns {number} The current total area.
   */
  public getTotalArea(): number {
    return this.totalArea;
  }

  /**
   * Sets the total area.
   * @param value - The new total area.
   */
  public setTotalArea(value: number): void {
    this.totalArea = value;
  }

  /**
   * Calculates the area under the curve defined by the given expression
   * using the trapezoidal rule.
   * @param expression - The mathematical expression as a string.
   * @param start - The start value of the integration interval.
   * @param end - The end value of the integration interval.
   * @param numberOfTrapezoids - The number of trapezoids to use for the calculation.
   * @returns {number} The calculated area.
   */
  public calculateArea(expression: string, start: number, end: number, numberOfTrapezoids: number): number {
    let area = 0;
    const interval = (end - start) / numberOfTrapezoids;
    let x = start;
    for (let i = 0; i < numberOfTrapezoids; i++) {
      const y1 = math.evaluate(expression, { x: x });
      const y2 = math.evaluate(expression, { x: x + interval });
      area += (y1 + y2) * interval / 2;
      x += interval;
    }
    return area;
  }
}
