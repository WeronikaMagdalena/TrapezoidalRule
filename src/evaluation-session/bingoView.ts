/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 01 05 2024
 * @description MVC Bingo*/

/**
 * View for the Bingo game.
 */
export class BingoView {
  private readonly tiles: NodeListOf<HTMLElement> = document.querySelectorAll(".tile");

  /**
   * Updates the display of the game board.
   * @param board - The current state of the game board.
   */
  public updateBoard(board: number[]): void {
    console.log(board);
    this.tiles.forEach((tile, index) => {
      tile.innerText = board[index].toString();
    });
  }

}