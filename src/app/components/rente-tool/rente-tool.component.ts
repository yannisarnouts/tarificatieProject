import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TarificationService} from '../../services/tarification.service';
import {TarificationTable} from '../../model/tarification-table';

@Component({
  selector: 'app-rente-tool',
  templateUrl: './rente-tool.component.html',
  styleUrls: ['./rente-tool.component.scss']
})
export class RenteToolComponent implements OnInit {
  renteForm: FormGroup;
  clients: any[] = new Array();
  tarificationTable: TarificationTable;
  quotity: number; restincome: number; ratioredemptionincome: number; criteria: number;
  calculatedInterestRate: number;
  constructor(private tarificationService: TarificationService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.renteForm = this.formBuilder.group({
      nameA: ['', Validators.required],
      nameB: ['', Validators.required],
      totalPrice: ['', Validators.required],
      loan: ['', Validators.required],
      totalSalary: ['', Validators.required],
      monthlyRedemption: ['', Validators.required],
      typeOfLoan: ['', Validators.required]
    });
  }

  calculate() {
    this.criteria = 0;
    this.quotity = this.calculateQuotity();
    this.restincome = this.restIncome();
    this.ratioredemptionincome = this.ratioRedemptionIncome();
    if (this.quotity <= 0.8) {
      this.criteria += 1;
    }
    if (this.restincome >= 2000) {
      this.criteria += 1;
    }
    if (this.ratioredemptionincome <= 0.4) {
      this.criteria += 1;
    }
    this.getTarificationTable();
  }
  reset() {
    this.renteForm.reset();
  }
  calculateQuotity(): number {
    return this.renteForm.get('loan').value / this.renteForm.get('totalPrice').value;
  }
  restIncome(): number {
    return this.renteForm.get('totalSalary').value - this.renteForm.get('monthlyRedemption').value;
  }
  ratioRedemptionIncome(): number {
    return this.renteForm.get('monthlyRedemption').value / this.renteForm.get('totalSalary').value;
  }
  getTarificationTable() {
    this.tarificationService.getTable(this.renteForm.get('typeOfLoan').value).subscribe(res => {
      this.tarificationTable =  new TarificationTable(res.data());
      if (this.criteria === 1) {
        this.calculatedInterestRate = this.tarificationTable.Bronze;
      } else if (this.criteria === 2) {
        this.calculatedInterestRate = this.tarificationTable.Silver;
      } else if (this.criteria === 3) {
        this.calculatedInterestRate = this.tarificationTable.Gold;
      }
    });
  }
}
