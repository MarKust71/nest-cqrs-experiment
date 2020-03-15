export class GetWaterConsumptionApiCommand {
  constructor(email: string) {
    this.email = email;
  }
  readonly email: string;
}
