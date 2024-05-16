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

/**
 * Main function that creates the model, view and controller
 */

import { Controller } from './Controller/controller';
import { Model } from './Model/model';
import { View } from './View/view';

function main(): void {
  const model = new Model();
  const view = new View();
  new Controller(model, view);
}

main();