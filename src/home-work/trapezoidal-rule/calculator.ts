import * as math from 'mathjs';

export class Calculator {
  private expression: string;
  private numberOfTrapezoids: number;
  private start: number;
  private end: number;

  constructor(expression: string, numberOfTrapezoids: number, start: number, end: number) {
    this.expression = expression;
    this.numberOfTrapezoids = numberOfTrapezoids;
    this.start = start;
    this.end = end;
  }

  public calculateArea(): number {
    const step = (this.end - this.start) / this.numberOfTrapezoids;
    let sum = 0;

    for (let i = 1; i <= this.numberOfTrapezoids; i++) {
      const xi0 = this.start + (i - 1) * step;
      const xi1 = this.start + i * step;
      const yi0 = math.evaluate(this.expression, { x: xi0 });
      const yi1 = math.evaluate(this.expression, { x: xi1 });

      sum += (yi0 + yi1) * step / 2;
    }

    return sum;
  }
}
