import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

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
    updateDate: Date()
  }

  saveCreditCard(){
    console.log("Form Submitted");
    console.log(this.newCreditCard)
  }
}
