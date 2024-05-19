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

import { CalculatorModel } from "../Model/model";
import { View } from "../View/view";

export class Controller {

  constructor(private model: CalculatorModel, private view: View) {
    this.model = model;
    this.view = view;
    this.init();
  }

  private init(): void {
    this.updateView();
    this.handleEvents();
  }

  private updateView = (): void => {
    this.view.draw(this.model.getFunctionModel().plotFunction(),
      this.model.getFunctionModel().getStart(),
      this.model.getFunctionModel().getEnd(),
      this.model.getFunctionModel().calculateMinMax(),
      this.model.getTrapezoidsModel().getNumberOfTrapezoids(),
      this.model.getTrapezoidsModel().getTotalArea());
    console.log(this.model.getFunctionModel().getExpression() + ' [' + this.model.getFunctionModel().getStart() + ', ' + this.model.getFunctionModel().getEnd() + ']');
  }

  private handleEvents(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const submitButton = document.getElementById("submit") as HTMLButtonElement;
      submitButton.addEventListener("click", (event: Event) => {
        event.preventDefault();
        const expression = (document.getElementById("expression") as HTMLInputElement).value;
        const numberOfTrapezoids = (document.getElementById("numberOfTrapezoids") as HTMLInputElement).valueAsNumber;
        const start = (document.getElementById("start") as HTMLInputElement).valueAsNumber;
        const end = (document.getElementById("end") as HTMLInputElement).valueAsNumber;
        this.updateModel(expression, numberOfTrapezoids, start, end);
        this.updateView();
      });
    });
  }

  private updateModel(expression: string, numberOfTrapezoids: number, start: number, end: number): void {
    this.model.getFunctionModel().setExpression(expression);
    this.model.getTrapezoidsModel().setNumberOfTrapezoids(numberOfTrapezoids);
    this.model.getFunctionModel().setStart(start);
    this.model.getFunctionModel().setEnd(end);
    this.model.getTrapezoidsModel().setTotalArea(this.model.getTrapezoidsModel().calculateArea(expression, start, end, numberOfTrapezoids));
  }

}