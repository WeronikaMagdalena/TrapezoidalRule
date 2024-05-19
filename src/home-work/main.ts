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

import { Controller } from "./Controller/controller";
import { CalculatorModel } from "./Model/model";
import { View } from "./View/view";

/**
 * Entry point for the MVC Trapezoidal Rule Calculator application.
 * This module initializes the model, view, and controller.
 * @function
 */
function main(): void {
  const model = new CalculatorModel();
  const view = new View();
  new Controller(model, view);
}

main();