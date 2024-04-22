import { Model } from "./model";
import { View } from "./view";

export class Controller {

  constructor(private model: Model, private view: View) {
    this.model = model;
    this.view = view;
    this.init();
  }

  private init(): void {
    this.updateView(this.model.getExpression(), this.model.getNumberOfTrapezoids(), this.model.getStart(), this.model.getEnd());
    this.handleEvents();
  }

  private handleEvents(): void {
    document.addEventListener('input-changed', (event: Event) => {
      const customEvent = event as CustomEvent;
      const action = customEvent.detail.action;
      const value = customEvent.detail.value;
      console.log('Action:', action);
      console.log('Value:', value);
      this.updateModel(action, value);
      this.updateView(this.model.getExpression(), this.model.getNumberOfTrapezoids(), this.model.getStart(), this.model.getEnd())
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
  }
}