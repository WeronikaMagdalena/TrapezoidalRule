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

import { FunctionModel } from "./function-model";

export class CalculatorModel {
  private functionModel: FunctionModel = new FunctionModel();
  private numberOfTrapezoids: number = 4;

  public getFunctionModel(): FunctionModel {
    return this.functionModel;
  }

  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
  }

  public setFunctionModel(expression: string, numberOfTrapezoids: number, start: number, end: number) {
    this.functionModel = new FunctionModel(expression, numberOfTrapezoids, start, end);
  }

  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
  }

}