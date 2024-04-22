export class Model {
  constructor(
    public expression: string = 'x^2 + 1',
    public numberOfTrapezoids: number = 4,
    public start: number = 0,
    public end: number = 2
  ) { }

  public getExpression(): string {
    return this.expression;
  }

  public getNumberOfTrapezoids(): number {
    return this.numberOfTrapezoids;
  }

  public getStart(): number {
    return this.start;
  }

  public getEnd(): number {
    return this.end;
  }

  public setExpression(value: string): void {
    this.expression = value;
  }

  public setNumberOfTrapezoids(value: number): void {
    this.numberOfTrapezoids = value;
  }

  public setStart(value: number): void {
    this.start = value;
  }

  public setEnd(value: number): void {
    this.end = value;
  }
}