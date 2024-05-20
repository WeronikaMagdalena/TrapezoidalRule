/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 01 05 2024
 * @description MVC Bingo
 **/

import { forEach } from "mathjs";
import { BingoModel } from "./bingoModel";
import { BingoView } from "./bingoView";

/**
 * Controller for the Bingo game.
 */
export class BingoController {
  private view: BingoView;
  private model: BingoModel;

  /**
   * Initializes a new instance of the TicTacToeController class.
   * @param {GameModel} gameModel - The game model.
   * @param {ScoreBoardModel} scoreBoardModel - The scoreboard model.
   * @param {TicTacToeView} view - The view for the game.
   */
  constructor(model: BingoModel, view: BingoView) {
    this.model = model;
    this.view = view;
    this.handleEvents();
  }

  /**
   * Attaches event listeners to the game tiles.
   */
  private handleEvents(): void {
    this.updateViews();
    document.addEventListener("DOMContentLoaded", () => {
      const button = document.getElementById("reset") as HTMLButtonElement;
      button.addEventListener("click", () => {
        this.handleReset();
      });
    })
    const submitButton = document.getElementById("submit") as HTMLButtonElement;
    submitButton.addEventListener("click", (event: Event) => {
      event.preventDefault();
      const specialNumber = (document.getElementById("specialNumber") as HTMLInputElement).valueAsNumber;
      this.updateModel(specialNumber);
      this.updateViews();
    });

  }

  /**
   * Handles the click event on a game tile.
   * @param {number} index - The index of the clicked tile.
   */
  public handleReset(): void {
    this.model.resetBoard();
    this.updateViews();
  }


  /**
   * Updates the game views.
   */
  private updateViews(): void {
    this.view.updateBoard(this.model.getBoard());
  }

  private updateModel(specialNumber: number): void {
    this.model.setSpecialNumber(specialNumber);
    this.model.specialResetBoard();
  }
}
