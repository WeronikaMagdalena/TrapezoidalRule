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
import { TrapezoidsModel } from "./trapezoids-model";

export class CalculatorModel {
  private functionModel: FunctionModel = new FunctionModel();
  private trapezoidsModel: TrapezoidsModel = new TrapezoidsModel();

  public getFunctionModel(): FunctionModel {
    return this.functionModel;
  }

  public getTrapezoidsModel(): TrapezoidsModel {
    return this.trapezoidsModel;
  }

  public setFunctionModel(expression: string, start: number, end: number) {
    this.functionModel = new FunctionModel(expression, start, end);
  }

}