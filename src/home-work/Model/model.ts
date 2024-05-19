/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @module CalculatorModel
 * @description Model class for the MVC Trapezoidal Rule Calculator. 
 * It contains the function model and trapezoids model used for calculations.
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

import { FunctionModel } from "./function-model";
import { TrapezoidsModel } from "./trapezoids-model";

/**
 * CalculatorModel class that manages the function model and trapezoids model.
 */
export class CalculatorModel {
  private functionModel: FunctionModel = new FunctionModel();
  private trapezoidsModel: TrapezoidsModel = new TrapezoidsModel();

  /**
   * Gets the FunctionModel instance.
   * @returns {FunctionModel} The current function model.
   */
  public getFunctionModel(): FunctionModel {
    return this.functionModel;
  }

  /**
   * Gets the TrapezoidsModel instance.
   * @returns {TrapezoidsModel} The current trapezoids model.
   */
  public getTrapezoidsModel(): TrapezoidsModel {
    return this.trapezoidsModel;
  }

  /**
   * Sets a new function model with the given expression, start, and end.
   * @param {string} expression - The mathematical expression to be evaluated.
   * @param {number} start - The start of the interval.
   * @param {number} end - The end of the interval.
   */
  public setFunctionModel(expression: string, start: number, end: number): void {
    this.functionModel = new FunctionModel(expression, start, end);
  }
}