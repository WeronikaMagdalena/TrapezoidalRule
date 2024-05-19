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

export class TrapezoidsView {

  draw(canvas: HTMLCanvasElement, numberOfTrapezoids: number) {
    const margin = 20;
    const width = canvas.width - 2 * margin;
    const height = canvas.height - 2 * margin;
    const context = canvas.getContext("2d")!;
    context.fillStyle = 'red';
    context.strokeStyle = 'darkred';
    context.beginPath();
    context.arc(margin, 100, 4, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
    for (let i = 0; i < numberOfTrapezoids; i++) {
      context.beginPath();
      context.moveTo(margin + width / numberOfTrapezoids * i + 4, 100);
      context.lineWidth = 1;
      context.lineTo(margin + width / numberOfTrapezoids * (i + 1), 100);
      context.stroke();
      context.beginPath();
      context.arc(margin + width / numberOfTrapezoids * (i + 1), 100, 4, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
    }
  }

}
