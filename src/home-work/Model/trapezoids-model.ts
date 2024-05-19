/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @description MVC Trapezoidal Rule Calculator - TrapezoidsModel
 */

export class TrapezoidsModel {
  private numberOfTrapezoids: number = 4;

  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
  }
  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
  }
}
