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

import { round } from "mathjs";

export class GridView {

  draw(canvas: HTMLCanvasElement, start: number, end: number, { minY, maxY }: { minY: number, maxY: number }) {
    const context = canvas.getContext("2d")!;
    const margin = 20;
    const width = canvas.width - 2 * margin;
    const height = canvas.height - 2 * margin;
    const xRange = end - start;
    const yRange = maxY - minY;
    const xScale = width / xRange;
    const yScale = height / yRange;

    // Calculate the origin
    const xOrigin = margin - start * xScale;
    const yOrigin = height + margin + minY * yScale;

    // Draw horizontal grid lines above and below x-axis
    const numHorizontalLines = Math.max(6, Math.min(10, Math.round(height / 50))); // Adjust the number of lines based on canvas height
    const horizontalSpacing = yRange / (numHorizontalLines - 1);
    for (let i = 0; i < numHorizontalLines; i++) {
      // Draw lines above x-axis
      const yAbove = yOrigin - i * horizontalSpacing * yScale;
      context.beginPath();
      context.moveTo(margin, yAbove);
      context.lineTo(width + margin, yAbove);
      context.lineWidth = 0.5;
      context.strokeStyle = 'lightgray';
      context.stroke();

      // Draw lines below x-axis
      const yBelow = yOrigin + i * horizontalSpacing * yScale;
      context.beginPath();
      context.moveTo(margin, yBelow);
      context.lineTo(width + margin, yBelow);
      context.lineWidth = 0.5;
      context.strokeStyle = 'lightgray';
      context.stroke();
    }

    // Draw vertical grid lines to the right of y-axis
    const numVerticalLinesRight = Math.max(6, Math.min(10, Math.round(width / 50))); // Adjust the number of lines based on canvas width
    const verticalSpacingRight = xRange / (numVerticalLinesRight - 1);
    for (let i = 0; i < numVerticalLinesRight; i++) {
      const xRight = xOrigin + i * verticalSpacingRight * xScale;
      context.beginPath();
      context.moveTo(xRight, margin);
      context.lineTo(xRight, height + margin);
      context.lineWidth = 0.5;
      context.strokeStyle = 'lightgray';
      context.stroke();
    }

    // Draw vertical grid lines to the left of y-axis
    const numVerticalLinesLeft = Math.max(6, Math.min(10, Math.round(width / 50))); // Adjust the number of lines based on canvas width
    const verticalSpacingLeft = xRange / (numVerticalLinesLeft - 1);
    for (let i = 0; i < numVerticalLinesLeft; i++) {
      const xLeft = xOrigin - i * verticalSpacingLeft * xScale; // Subtract instead of adding
      context.beginPath();
      context.moveTo(xLeft, margin);
      context.lineTo(xLeft, height + margin);
      context.lineWidth = 0.5;
      context.strokeStyle = 'lightgray';
      context.stroke();
    }

    // Draw x-axis if it is within the visible range
    if (minY <= 0 && maxY >= 0) {
      const yZero = yOrigin;
      context.beginPath();
      context.moveTo(margin, yZero);
      context.lineTo(width + margin, yZero);
      context.lineWidth = 2;
      context.strokeStyle = 'darkgrey';
      context.stroke();
    }

    // Draw y-axis if it is within the visible range
    if (start <= 0 && end >= 0) {
      const xZero = xOrigin;
      context.beginPath();
      context.moveTo(xZero, margin);
      context.lineTo(xZero, height + margin);
      context.lineWidth = 2;
      context.strokeStyle = 'darkgrey';
      context.stroke();
    }

    context.fillStyle = 'black';
    context.fillText(round(minY).toString(), margin / 2, height + margin);
    context.fillText(round(maxY).toString(), margin / 2, margin);
    context.fillText(start.toString(), margin, height + margin * 1.6);
    context.fillText(end.toString(), margin + width, height + margin * 1.6);
  }

}