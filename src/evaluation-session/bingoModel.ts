/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 01 05 2024
 * @description MVC Bingo
 *
 **/

import * as math from "mathjs";

/**
 * Represents the model for a Bingo game.
 */
export class BingoModel {
  private board: number[] = [42];
  private specialNumber: number = -1;

  /**
   * Initializes a new instance of the TicTacToeModel class.
   */
  constructor() {
    this.resetBoard();
  }

  /**
   * Resets the board to its initial state.
   */
  public resetBoard(): void {
    for (let i = 0; i < 42; i++) {
      this.board[i] = math.floor(math.random(0, 10));
    }
  }

  /**
   * Gets the current state of the board.
   * @returns An array representing the current state of the board.
   */
  public getBoard(): number[] {
    return this.board;
  }

  public setSpecialNumber(specialNumber: number): void {
    if (specialNumber >= 0 && specialNumber <= 9) {
      this.specialNumber = specialNumber;
    }
  }

  public specialResetBoard(): void {
    console.log(this.specialNumber);
    let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1];
    numbers[10] = this.specialNumber;
    numbers[11] = this.specialNumber;
    numbers[12] = this.specialNumber;
    numbers[13] = this.specialNumber;
    console.log(numbers);
    if (this.specialNumber != -1) {
      for (let i = 0; i < 42; i++) {
        let randomIndex = math.floor(math.random(0, 14));
        console.log("rendom index: " + randomIndex);
        this.board[i] = numbers[randomIndex];
      }
    }
  }

}
