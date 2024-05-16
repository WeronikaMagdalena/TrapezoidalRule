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

export class Form {
  private readonly inputs: Array<{ elementId: string, modelSetter: string }>;

  /**
   * Initializes the Form instance and sets up event listeners.
   */
  constructor() {
    this.inputs = [
      { elementId: '#expression', modelSetter: 'setExpression' },
      { elementId: '#numberOfTrapezoids', modelSetter: 'setNumberOfTrapezoids' },
      { elementId: '#start', modelSetter: 'setStart' },
      { elementId: '#end', modelSetter: 'setEnd' }
    ];
    this.setupEventListeners();
  }

  /**
   * Sets up event listeners for form submission.
   * Dispatches 'input-changed' events with updated input values.
   */
  public setupEventListeners(): void {
    const inputForm = document.getElementById('inputForm') as HTMLFormElement;
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('Submit click');
      this.inputs.forEach(input => {
        const inputElement = document.querySelector(input.elementId) as HTMLInputElement;
        let inputValue: string | number = inputElement.value;
        if (input.modelSetter === 'setNumberOfTrapezoids' || input.modelSetter === 'setStart' || input.modelSetter === 'setEnd') {
          inputValue = parseFloat(inputValue);
        }
        const EVENT_INFO: object = { action: input.modelSetter, value: inputValue };
        document.dispatchEvent(new CustomEvent('input-changed', { detail: EVENT_INFO }));
      });
    });
  }
}