export class TarificationTable {
  Bronze: number;
  Silver: number;
  Gold: number;


  constructor(data) {
    this.Bronze = data.Bronze;
    this.Silver = data.Silver;
    this.Gold = data.Gold;
  }
}
