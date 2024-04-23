export class Form {
  private readonly inputs: Array<{ elementId: string, modelSetter: string }>;

  constructor() {
    this.inputs = [
      { elementId: '#expression', modelSetter: 'setExpression' },
      { elementId: '#numberOfTrapezoids', modelSetter: 'setNumberOfTrapezoids' },
      { elementId: '#start', modelSetter: 'setStart' },
      { elementId: '#end', modelSetter: 'setEnd' }
    ];
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
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