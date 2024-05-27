import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  constructor(private creditcardsService:CreditcardsService,
    private router: Router){
  }

  newCreditCard: CreditCard = {
    id: undefined,
    name: "",
    description: "",
    bankName: "",
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    recommendedScore: "100-500",
    annualFee: 12,
    termsAndConditions: "Terms and conditions for the credit card",
    createdDate: Date(),
    updatedDate: Date()
  }

  
  saveCreditCard(){
    this.creditcardsService.createCreditCard(this.newCreditCard).subscribe(data => {
    alert("Credit Card Added");
    this.router.navigate(['creditcards']);
    })
  }

}