/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 01 05 2024
 * @description MVC Bingo
 */

import { BingoController } from "./bingoController";
import { BingoModel } from "./bingoModel";
import { BingoView } from "./bingoView";

/**
 * The main function to initialize the Bingo game.
 */
function main(): void {
  const model = new BingoModel();
  const view = new BingoView();
  new BingoController(model, view);
}

// Call the main function to start the game
main();