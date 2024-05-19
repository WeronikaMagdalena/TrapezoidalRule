/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @module TrapezoidsView
 * @description View class for drawing trapezoids on a canvas in the MVC Trapezoidal Rule Calculator.
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

/**
 * TrapezoidsView class that manages the drawing of trapezoids on the HTML canvas element.
 */
export class TrapezoidsView {

  /**
   * Draws the trapezoids on the canvas.
   * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
   * @param {number} numberOfTrapezoids - The number of trapezoids to draw.
   * @param {Object} xy - The x and y coordinates of the function points.
   * @param {number[]} xy.x - The x coordinates of the function points.
   * @param {number[]} xy.y - The y coordinates of the function points.
   * @param {number} minX - The minimum x value.
   * @param {number} maxX - The maximum x value.
   * @param {Object} minMaxY - The minimum and maximum y values.
   * @param {number} minMaxY.minY - The minimum y value.
   * @param {number} minMaxY.maxY - The maximum y value.
   */
  draw(
    canvas: HTMLCanvasElement,
    numberOfTrapezoids: number,
    { x, y }: { x: number[], y: number[] },
    minX: number,
    maxX: number,
    { minY, maxY }: { minY: number, maxY: number }
  ): void {
    const margin = 20;
    const width = canvas.width - 2 * margin;
    const height = canvas.height - 2 * margin;
    const scaleY = height / (maxY - minY);
    const context = canvas.getContext("2d")!;
    context.strokeStyle = 'darkred';
    context.closePath();
    let xAxis = height + margin;
    const yOrigin = height + margin + minY * scaleY;
    if (minY <= 0 && maxY >= 0) {
      xAxis = yOrigin;
    }

    for (let i = 0; i < numberOfTrapezoids; i++) {
      const startXIndex = Math.round((x.length - 1) * i / numberOfTrapezoids);
      const endXIndex = Math.round((x.length - 1) * (i + 1) / numberOfTrapezoids);

      const startX = margin + width * i / numberOfTrapezoids;
      const endX = margin + width * (i + 1) / numberOfTrapezoids;

      const startY = height - (y[startXIndex] - minY) * scaleY + margin;
      const endY = height - (y[endXIndex] - minY) * scaleY + margin;

      context.beginPath();
      context.lineWidth = 0.5;
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
      context.fillStyle = 'rgba(255, 0, 0, 0.2)';
      context.lineTo(endX, xAxis); // Bottom right corner
      context.lineTo(startX, xAxis); // Bottom left corner
      context.fill();
      context.closePath();

      context.fillStyle = 'red';
      context.beginPath();
      context.arc(startX, startY, 4, 0, 2 * Math.PI);
      context.fill();
      context.closePath();

      // Draw dashed line from red point to xAxis
      context.beginPath();
      context.setLineDash([5, 5]); // Set dash pattern
      context.moveTo(startX, startY);
      context.lineTo(startX, xAxis);
      context.stroke();
      context.closePath();
      context.setLineDash([]);
    }

    // Draw the last point
    context.beginPath();
    context.arc(margin + width, height - (y[y.length - 1] - minY) * scaleY + margin, 4, 0, 2 * Math.PI);
    context.fill();
  }
}
