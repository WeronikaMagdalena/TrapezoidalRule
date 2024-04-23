/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Weronika Wójcik
 * @since 21 04 2024
 * @description MVC Trapezoidal Rule Calculator
 * Controller:
 *  Intermediary between the model and the view
 *  Recieves user interactions through the view
 *  Processes these interactions (requests to the model)
 *  Updates the view
 * @see {@link https://github.com/ULL-ESIT-PAI-2023-2024/2023-2024_P12-Trapezoidal-Rule-Calculator/blob/main/p12_MVC-TrapezoidalRuleCalculator.md}
 */

import { Calculator } from "./calculator";
import { Model } from "./model";
import { View } from "./view";
import * as math from 'mathjs';

export class Controller {

  constructor(private model: Model, private view: View) {
    this.model = model;
    this.view = view;
    this.init();
  }

  private init(): void {
    this.handleEvents();
    this.updateView(
      this.model.getExpression(),
      this.model.getNumberOfTrapezoids(),
      this.model.getStart(),
      this.model.getEnd()
    );
  }

  private handleEvents(): void {
    document.addEventListener('input-changed', (event: Event) => {
      const customEvent = event as CustomEvent;
      const action = customEvent.detail.action;
      const value = customEvent.detail.value;
      this.updateModel(action, value);
      this.updateView(
        this.model.getExpression(),
        this.model.getNumberOfTrapezoids(),
        this.model.getStart(),
        this.model.getEnd()
      );
    });
  }

  private updateModel(action: string, value: string): void {
    switch (action) {
      case 'setExpression':
        this.model.setExpression(value);
        break;
      case 'setNumberOfTrapezoids':
        this.model.setNumberOfTrapezoids(parseFloat(value));
        break;
      case 'setStart':
        this.model.setStart(parseFloat(value));
        break;
      case 'setEnd':
        this.model.setEnd(parseFloat(value));
        break;
    }
  }

  private updateView = (expression: string, numberOfTrapezoids: number, start: number, end: number): void => {
    this.view.draw(expression, numberOfTrapezoids, start, end);
    this.displayCalculationResult();
  }

  private displayCalculationResult(): void {
    const resultTableBody = document.getElementById('calculationTableBody');
    const totalAreaSpan = document.getElementById('totalArea');
    if (!resultTableBody || !totalAreaSpan) return;

    let totalArea = 0;
    resultTableBody.innerHTML = '';

    for (let i = 1; i <= this.model.getNumberOfTrapezoids(); i++) {
      const xi0 = this.model.getStart() + (i - 1) * (this.model.getEnd() - this.model.getStart()) / this.model.getNumberOfTrapezoids();
      const xi1 = this.model.getStart() + i * (this.model.getEnd() - this.model.getStart()) / this.model.getNumberOfTrapezoids();
      const yi0 = math.evaluate(this.model.getExpression(), { x: xi0 });
      const yi1 = math.evaluate(this.model.getExpression(), { x: xi1 });
      const area = (yi0 + yi1) * (xi1 - xi0) / 2;
      totalArea += area;

      const row = document.createElement('tr');
      row.innerHTML = `<td>Trapezoid ${i}</td><td>${area}</td>`;
      resultTableBody.appendChild(row);
    }

    totalAreaSpan.textContent = totalArea.toString();
  }
}