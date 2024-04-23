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
  constructor(
    public expression: string = 'x^2',
    public numberOfTrapezoids: number = 4,
    public start: number = 0,
    public end: number = 2
  ) { }

  public getExpression(): string {
    return this.expression;
  }

  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
  }

  public getStart(): number {
    return this.start;
  }

  public getEnd(): number {
    return this.end;
  }

  public setExpression(value: string): void {
    this.expression = value;
  }

  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
  }

  public setStart(value: number): void {
    this.start = value;
  }

  public setEnd(value: number): void {
    this.end = value;
  }

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