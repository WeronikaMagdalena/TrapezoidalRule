/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @description MVC Trapezoidal Rule Calculator - TrapezoidsModel
 */

import * as math from "mathjs";

export class TrapezoidsModel {
  private numberOfTrapezoids: number = 4;
  private totalArea = 4.75;

  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
  }

  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
  }

  public getTotalArea(): number {
    return this.totalArea;
  }

  public setTotalArea(value: number): void {
    this.totalArea = value;
  }

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
