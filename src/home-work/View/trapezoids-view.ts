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

  draw(canvas: HTMLCanvasElement, numberOfTrapezoids: number, { x, y }: { x: number[], y: number[] }, minX: number, maxX: number, { minY, maxY }: { minY: number, maxY: number }) {
    const margin = 20;
    const width = canvas.width - 2 * margin;
    const height = canvas.height - 2 * margin;
    const scaleX = width / (maxX - minX);
    const scaleY = height / (maxY - minY);
    const context = canvas.getContext("2d")!;
    context.fillStyle = 'red';
    context.strokeStyle = 'darkred';
    context.closePath();
    for (let i = 0; i < numberOfTrapezoids; i++) {
      context.beginPath();
      context.moveTo(margin + width / numberOfTrapezoids * i, height - (y[((maxX - minX) / 0.05) / numberOfTrapezoids * i] - minY) * scaleY + margin);
      context.lineWidth = 1;
      context.lineTo(margin + width / numberOfTrapezoids * (i + 1), height - (y[((maxX - minX) / 0.05) / numberOfTrapezoids * (i + 1)] - minY) * scaleY + margin);
      context.stroke();
      context.beginPath();
      context.arc(margin + width / numberOfTrapezoids * i, height - (y[((maxX - minX) / 0.05) / numberOfTrapezoids * i] - minY) * scaleY + margin, 4, 0, 2 * Math.PI);
      context.fill();
      context.closePath();
    }
    context.beginPath();
    context.arc(margin + width, height - (y[y.length - 1] - minY) * scaleY + margin, 4, 0, 2 * Math.PI);
    context.fill();
  }

}
