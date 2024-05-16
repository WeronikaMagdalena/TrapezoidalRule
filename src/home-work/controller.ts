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

import { Model } from "./model";
import { View } from "./View/view";

export class Controller {
  /**
   * Initializes the controller with the provided model and view.
   * Also initializes event handling and updates the initial view state.
   * @param model - The model instance.
   * @param view - The view instance.
   */
  constructor(private model: Model, private view: View) {
    this.model = model;
    this.view = view;
    this.init();
  }

  /**
   * Initializes event handling for user interactions.
   * Listens for 'input-changed' events from the view.
   * Upon receiving an event, updates the model and the view accordingly.
   */
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

  /**
   * Updates the model based on the provided action and value.
   * @param action - The action to perform on the model.
   * @param value - The value associated with the action.
   */
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

  /**
   * Updates the view with the provided expression, number of trapezoids, start, and end values.
   * Calculates the areas using the model and updates the view with the result.
   * @param expression - The mathematical expression.
   * @param numberOfTrapezoids - The number of trapezoids for integration.
   * @param start - The start value of the interval.
   * @param end - The end value of the interval.
   */
  private updateView = (expression: string, numberOfTrapezoids: number, start: number, end: number): void => {
    this.view.draw(expression, numberOfTrapezoids, start, end);
    const areas = this.model.calculateAreas();
    const totalArea = areas.reduce((acc, curr) => acc + curr, 0);
    this.view.updateCalculationResultTable(areas, totalArea);
  }

  /**
   * Initializes the controller by setting up event handling and updating the initial view state.
   */
  private init(): void {
    this.handleEvents();
    this.updateView(
      this.model.getExpression(),
      this.model.getNumberOfTrapezoids(),
      this.model.getStart(),
      this.model.getEnd()
    );
  }
}